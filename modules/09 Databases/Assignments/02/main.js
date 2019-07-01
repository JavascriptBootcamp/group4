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

    app.post('/car', (req, res) => {
        const { license, manufacturer, model, year, km, price } = req.body;
        if (!license || !manufacturer || !model || !year || !km || !price) return responseWithStatus(500, res, "Missing Data");
        try {
            const obj = { license, manufacturer, model, year, km, price };
            collection.insertOne(obj);
            responseWithStatus(200, res, "car added");
        } catch (error) {
            responseWithStatus(500, res, "something wrong..." + error);
        }
    });


    app.get('/car/:license', (request, response) => {
        const { license } = request.params;
        console.log(license);
        collection.find({ license }).toArray((err, data) => {
            if (err) return console.error("ERROR OCCURED:", err);

            console.log("data", data);
            response.send(data);
        })
    });

    app.get('/cars/:fromYear/:untilYear', (request, response) => {
        const { fromYear, untilYear } = request.params;
        collection.find({ year: { $gte: +fromYear, $lte: +untilYear } }).toArray((err, data) => {
            if (err) return console.error("ERROR OCCURED:", err);

            console.log("data", data);
            response.send(data);
        })
    });


    app.get('/cars/:manufacturer', (request, response) => {
        const { manufacturer } = request.params;
        collection.find({ "manufacturer": manufacturer }, { projection: { model: 1, _id: 0 } }).toArray((err, data) => {
            if (err) return console.error("ERROR OCCURED:", err);
            console.log("data", data);
            response.send(data);
        })
    });

    app.get('/cars_model/:model', (request, response) => {
        const { model } = request.params;
        collection.find({ model }, { projection: { model: 1, price: 1, _id: 0 } }).toArray((err, data) => {
            if (err) return console.error("ERROR OCCURED:", err);
            console.log("data", data);
            response.send(data);
        })
    });

    app.get('/cars_max/:license1/:license2', (request, response) => {
        const { license1, license2 } = request.params;
        collection.find({ license: { $in: [license1, license2] } }).sort({price:-1}).limit(1).toArray((err, data) => {
            if (err) return console.error("ERROR OCCURED:", err);
            console.log("data", data);
            response.send(data);
        })
    });

    function responseWithStatus(status, response, message) {
        response.status(status).send({
            message
        });
    }

}
mongo.MongoClient.connect(dbUrl, onConnect);


app.listen(port, () => console.log("Server is running on port: " + port));