const express = require('express');
const cors = require('cors');
const mongo = require('mongodb');

const app = express();
app.use(express.json());
app.use(cors());

const port = 5000;
const dbUrl = 'mongodb://127.0.0.1:27017';

const onConnect = (err, databases)=>{
    if (err) 
        return console.error("ERROR OCCURED:", err);
    const dbName = "carsDB";
    const db = databases.db(dbName);
    const collectionName = "cars";
    const collection = db.collection(collectionName);

        // Receive two license numbers and display the car which is more expensive
        app.get("/car", async(req,res,next)=>{
            console.log("two license");
            let {ln1,ln2} = req.query;
            if(!ln1 || !ln2){
                next();
                return;
            }
                try{
    
                    const car1 = (await collection.find({"licenseNumber":ln1}).toArray())[0];
                    const car2 = (await collection.find({"licenseNumber":ln2}).toArray())[0];
                    const car = getExpensiveCar(car1,car2);
                    res.status(200).send(car);    
                }
                catch(err){
                    res.status(500).send(`Error:${err}`);            
                }       
        });

    // Display car details by license number
    app.get("/car", async(req,res)=>{
        const licenseNumber = req.query.ln;
        if(!licenseNumber){
            next();
            return;
        }
        console.log("licenseNumber");
        try{
        const cars = await collection.find({licenseNumber}).toArray();
        res.status(200).send(cars);
        }
        catch(err){
            res.status(500).send(`Error:${err}`);   
        }
    });

    // Display cars models by manufacturer
    app.get("/cars", async(req,res,next)=>{
        console.log("manufacturer");
        const {manufacturer} = req.query;
        if(!manufacturer){
            next();
            return;
        }
        try{
            const cars = await collection.find({manufacturer}).toArray();
            res.status(200).send(getModels(cars));    
        }
        catch(err){
            res.status(500).send(`Error:${err}`);            
        }      
    });

    // Display cars models and prices by model
    app.get("/cars", async(req,res,next)=>{
        console.log("model");
        let {model} = req.query;
        // model = model;
        if(!model){
            next();
            return;
        }
            try{
                const cars = await collection.find({model}).toArray();
                res.status(200).send(getModelsAndPrices(cars));    
            }
            catch(err){
                res.status(500).send(`Error:${err}`);            
            }      
    });

    // Display cars details by year range
    app.get("/cars", async(req,res,next)=>{
        console.log("year range");
        const {from, to} = req.query;
        if(!from || !to){
            next();
            return;
        }
        
        try{
            const cars = await collection.find({"year":{$gte: from, $lte: to}}).toArray();
            res.status(200).send(cars);    
        }
        catch(err){
            res.status(500).send(`Error:${err}`);   
        }        
    });

    app.get("/cars", async(req,res)=>{
        console.log("all");
        try{
            const cars = await collection.find().toArray();
            res.status(200).send(cars);    
        }
        catch(err){
            res.status(500).send(`Error:${err}`);   
        }        
    });

    // Adding a car
    app.post("/car",(req,res)=>{
        const {licenseNumber, manufacturer, model,year, km, price} = req.body;
        try{
            collection.insertOne({licenseNumber, manufacturer, model,year, km, price});
            res.status(200).send("Car added successfully!");
        }
        catch(err){
            res.status(500).send(`Error:${err}`);   
        }
    });
}

const getModels = (cars)=>{
    const arr = [];
    cars.map((item)=>arr.push({model:item.model}));
    return [...new Set(arr)]; 
};

const getModelsAndPrices = (cars)=>{
    const arr=[];
    cars.map((item)=>
        {arr.push( { model:item.model,price:item.price } ) 
        });
    return arr;
};

const getExpensiveCar = (car1,car2)=> +car1["price"] > +car2["price"] ? [car1] : [car2];

mongo.MongoClient.connect(dbUrl,{ useNewUrlParser: true },onConnect);
app.listen(port,()=>console.log(`Server is running in port ${port}`));