const express = require('express');
const mongo = require('mongodb');
const cors = require('cors');
const CarModel = require('./models/CarModel');

const app = express();

const port = 8000;
const dbUrl = 'mongodb://localhost';
app.use(cors());
app.use(express.json());

const onConnect = (err, databases) => {
    if (err) return console.error("ERROR OCCURED:", err);

    const dbName = 'store';
    const db = databases.db(dbName);
    const collectionName = 'cars';
    const collection = db.collection(collectionName);

    app.get('/cars', (request, response,next) => {
        collection.find().toArray( (err, data) => {
            if (err) return console.error("ERROR OCCURED:", err);
    
            console.log("data", data);
            response.send(data);
            next();
        } )
    });
    app.get('/car/:license', async(req,res,next) => {
        const myMessages = await collection.find({ LicenseNumber:  req.query.license}).toArray();
        // readFromJSON();
      // console.log("req.body",myMessages);
      responseWithStatus(200, res, myMessages);

        ///res.end("OK: "+myMessages);
        next();
    })
    
    app.get('/car/:manufacturer', async(req,res,next) => {
        // readFromJSON();
     //   console.log("req.body2", req.body);
     const myMessages = await collection.find({ Manufacturer:  req.query.manufacturer}).toArray();
     // readFromJSON();
     responseWithStatus(200, res, myMessages);

    console.log("req.body",myMessages);
    // res.end("OK: "+myMessages);
     next();
 })

    app.get('/car/:model',async (req,res,next) => {
        // readFromJSON();
       // console.log("req.body2", req.body);
       const myMessages = await collection.find({ Model: req.query.model}).toArray();
       // readFromJSON();
      console.log("req.body",myMessages);
      responseWithStatus(200, res, myMessages);

      // res.end("OK: "+myMessages);
       next();    });

    app.post('/cars', (request, response) => {
        //const { LicenseNumber, Manufacturer, Model, } = request.body;
        const car=GetModel ( request.body); 
      //  if (!name || !ingredients || !price) responseWithStatus(500, response, "Missing Data");
        try {
            collection.insertOne(car);
            // response.sendStatus(200);
            // response.status(200).send({
            //     message: "Added successfully"
            // });
            responseWithStatus(200, response, "Added successfully");
        }
        catch(ex) {
            responseWithStatus(500, response, ex);
        }
    });

    app.delete('/car', (request, response) => {
        const { name } = request.query;
        if (!name) responseWithStatus(200, response, "Missing Data");
        try {
            collection.deleteOne( { name } );
            responseWithStatus(200, response, "Deleted successfully");
        }
        catch(ex) {
            responseWithStatus(500, response, ex);
        }
    });

    app.put('/car', (request, response) => {
        const { name } = request.query;
        const { newName, newIngredients, newPrice } = request.body;
        if (!name || !newName || !newIngredients || !newPrice) responseWithStatus(500, response, "Missing Data");
        try{
            collection.updateOne({name}, { $set: { name: newName, ingredients: newIngredients, price: newPrice } });
            responseWithStatus(200, response, "Updated successfully");
        }
        catch(ex) {
            responseWithStatus(500, response, ex);
        }
    })
}
 function GetModel(car) {
    const { LicenseNumber, Manufacturer, Model,year,KM, price} = car;

    const carModel = new CarModel({
        LicenseNumber: LicenseNumber,
        Manufacturer : Manufacturer ,
        Model : Model ,
        year :year ,
        KM : KM ,
        price : price
     
    })
    
    return carModel;
 }
function responseWithStatus(status, response, message) {
    response.status(status).send({
        message
    });
}

mongo.MongoClient.connect(dbUrl, onConnect);

app.listen(port, () => console.log("Server is running on port: " + port));