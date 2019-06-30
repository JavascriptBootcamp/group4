const express = require('express');
const app = express();
const cors = require('cors');
const { MongoClient } = require('mongodb');
const port = 8000;
const url = 'mongodb://127.0.0.1:27017';
app.use(express.json());
app.use(cors());

MongoClient.connect(url, (err, dbs) => {

    const dbName = 'cars';
    const db = dbs.db(dbName);
    const collectionName = "cars";
    const collection = db.collection(collectionName);

    app.post('/car', (req, res) => {
        const { lisence, manufacturer, model, year, km, price } = req.body;
        const obj = { lisence, manufacturer, model, year, km, price };
        collection.insertOne(obj);
        responseWithStatus(200, res, "car added");
    });

    app.get('/car', async (req, res) => {
        const { lisence } = req.query;
        if (!lisence) responseWithStatus(500, res, "Missing Data");
        const car = await collection.find({ lisence }).toArray();
        responseWithStatus(200, res, car);
    });

    app.get('/cars', async (req, res, next) => {
        const { yearStart, yearEnd } = req.query;
        if (!yearStart || !yearEnd) {
            next();
        }
        else {
            const cars = await collection.find({ year: { $gt: yearStart, $lt: yearEnd } }).toArray();
            responseWithStatus(200, res, cars);
        }
    });

    app.get('/cars', async (req, res, next) => {
        const { manufacturer } = req.query;
        const models = [];
        if (!manufacturer) {
            next();
        }
        else {
            const cars = await collection.find({ manufacturer }).toArray();
            cars.forEach((item) => {
                if (item.manufacturer === manufacturer) {
                    models.push({ model: item.model });
                }
            });
            responseWithStatus(200, res, models);
        }
    });

    app.get('/cars', async (req, res) => {
        const { model } = req.query;
        const carsModelAndPrices = [];
        if (!model) responseWithStatus(500, res, "Missing Data");
        const cars = await collection.find({ model }).toArray();
        cars.forEach((item) => {
            if (item.model === model) {
                carsModelAndPrices.push({ model: item.model, price: item.price });
            }
        });
        responseWithStatus(200, res, carsModelAndPrices);
    });

});

function responseWithStatus(status, response, message) {
    response.status(status).send({
        message
    });
}

app.listen(port, () => console.log(`listen to ${port}`));