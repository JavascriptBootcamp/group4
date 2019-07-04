const express = require('express');
const mongo = require('mongodb');

const app = express();

const port = 8000;
const dbUrl = 'mongodb://127.0.0.1:27017';

app.use(express.json());


const onConnect = (err, databases) => {
    if (err) return console.error("ERROR OCCURED:", err);

    const dbName = 'cars_db';
    const db = databases.db(dbName);
    const collectionName = 'cars';
    const collection = db.collection(collectionName);


    app.post('/car', (request, response) => {

        const { license, Manufacturer, Model, Year, KM, Price } = request.body;
        if (!license || Manufacturer || Model || Year || KM || Price) responseWithStatus(500, response, "Missing Data");
        try {
            collection.insertOne({ license, Manufacturer, Model, Year, KM, Price });
            responseWithStatus(200, response, "Added Succussfuly");
        }
        catch (ex) {
            responseWithStatus(500, response, "Missing Data");
        }
    })

    app.get('/car/:license', (req, res) => {
        console.log("license:", req.params)
        const { license } = req.params;

        collection.find({ license }).toArray((err, data) => {
            if (err) return console.error("ERROR OCCURED:", err);

            console.log("data", data);
            res.send(data);
        })



    })


    app.get('/cars/:fromYear/:untilYear', (request, response, next) => {
        console.log("years:")
        const { fromYear, untilYear } = request.params;
        console.log("years", request.params)
        collection.find({ Year: { $gte: +fromYear, $lte: +untilYear } }).toArray((err, data) => {
            if (err) return console.error("ERROR OCCURED:", err);

            console.log("data", data);
            response.send(data);
        })

    })


    app.get('/car/models/:Manufacturer', (request, response) => {
        const { Manufacturer } = request.params;
        console.log("Manufacturer", Manufacturer)
        collection.find({ Manufacturer }, { projection: { Model: 1, _id: 0 } }).toArray((err, data) => {
            if (err) return console.error("ERROR OCCURED:", err);

            const modelsArr = data.map(d => d.Model)
            const models = modelsArr.filter((m, index) => modelsArr.indexOf(m) === index)
            response.send(models);
        })
    })


    app.get('/cars/models/prices/:Model', (request, response) => {
        const { Model } = request.params;
        console.log("Model", Model)
        collection.createIndex( { Model: "text" } );
        collection.find({ $text: { $search:  Model }}, { projection: { Model: 1,Year:1,Price:1, _id: 0 } }).toArray((err, data) => {
            if (err) return console.error("ERROR OCCURED:", err);

            response.send(data);
        })
    })

    app.get('/car/:licenseOne/:licenseTwo', (request, response) => {
        const { licenseOne,licenseTwo } = request.params;
        console.log("licenses", request.params)
        collection.find({license:{$in:[licenseOne,licenseTwo]} }).sort( { Price: -1 } ).limit( 1 ).toArray((err, data) => {
            if (err) return console.error("ERROR OCCURED:", err);

            response.send(data);
        })
    })

    function responseWithStatus(status, response, message) {
        response.status(status).send({
            message
        });
    }

}




mongo.MongoClient.connect(dbUrl, onConnect);

app.listen(port, () => console.log("Server is running on port: " + port));



