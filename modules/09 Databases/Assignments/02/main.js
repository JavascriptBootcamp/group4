const express = require('express');
const mongo = require('mongodb');

const app = express();

const port = 5000;
const dbUrl = 'mongodb://127.0.0.1:27017';

app.use(express.json());

const onConnect = (err, databases) => {
    if (err) return console.error("ERROR OCCURED:", err);

    const dbName = 'data';
    const db = databases.db(dbName);
    const collectionName = 'cars';
    const collection = db.collection(collectionName);

    // app.get('/cars', (request, response) => {
    //     collection.find().toArray((err, data) => {
    //         if (err) return console.error("ERROR OCCURED:", err);

    //         console.log("data", data);
    //         response.send(data);
    //     })
    // });


    app.get('/car/:License', (request, response) => {
        const {License} = request.params;
        console.log(License);
        collection.find({License}).toArray((err, data) => {
            if (err) return console.error("ERROR OCCURED:", err);

            console.log("data", data);
            response.send(data);
        })
    });

    app.get('/cars/:fromYear/:untilYear', (request,response) =>{
        const {fromYear,untilYear}  = request.params;
        collection.find( { Year:{ $gte: +fromYear, $lte: +untilYear}} ).toArray((err, data) => {
            if (err) return console.error("ERROR OCCURED:", err);

            console.log("data", data);
            response.send(data);
        })
    });

    app.get('/cars/:Manufacturer', (request,response) =>{
        const {Manufacturer }  = request.params;
        collection.find( {Manufacturer }, { item: 1, status: 1 } ).toArray((err, data) => {
            if (err) return console.error("ERROR OCCURED:", err);
            console.log("data", data);
            response.send(data);
        })
    });

}
mongo.MongoClient.connect(dbUrl, onConnect);

app.listen(port, () => console.log("Server is running on port: " + port));