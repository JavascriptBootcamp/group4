const express = require('express');
const cors = require('cors');
const mongo = require('mongodb');

const app = express();
app.use(express.json());

const port = 5000;
const dbUrl = 'mongodb://127.0.0.1:27017';

const onConnect = (err, databases)=>{
    if (err) 
        return console.error("ERROR OCCURED:", err);
    const dbName = "cars";
    const db = databases.db(dbName);
    const collectionName = "cars";
    const collection = db.collection(collectionName);

    app.get("/car", async(req,res)=>{
        const licenseNumber = req.query.ln;
        try{
        const cars = await collection.find({licenseNumber}).toArray();
        res.status(200).send(cars);
        }
        catch(err){
            res.status(500).send(`Error:${err}`);   
        }
    });

    app.get("/cars", async(req,res,next)=>{
        const {manufacturer} = req.query;
        if(!manufacturer)
            next();
        else{
        try{
            const cars = await collection.find({manufacturer}).toArray();
            console.log(cars);
            res.status(200).send(getModels(cars,manufacturer));    
        }
        catch(err){
            res.status(500).send(`Error:${err}`);            
        } 
    }       
    });

    app.get("/cars", async(req,res)=>{
        const {from, to} = req.query;
        try{
            const cars = await collection.find({"year":{$gte: from, $lte: to}}).toArray();
            res.status(200).send(cars);    
        }
        catch(err){
            res.status(500).send(`Error:${err}`);   
        }        
    });

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

getModels = (cars,manufacturer)=>{
    const arr = [];
    cars.forEach(element=> {
        console.log("element:",element);
        console.log("elementmanufacturer:",element["manufacturer"],manufacturer,element.model);
        console.log("as:",arr.findIndex((item)=>item.model === element.model));
        if(element["manufacturer"] === manufacturer){
            console.log("model:",element.model);
            if(arr.findIndex((item)=>{
                console.log(item.model,element.model)
                return item.model === element.model

            }) === -1)
                arr.push(element.model);
        }
    }, this);
    console.log("arr:",arr);
    return arr;
}

mongo.MongoClient.connect(dbUrl,onConnect);
app.listen(port,()=>console.log(`Server is running in port ${port}`));