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
        if (!lisence || !manufacturer || !model || !year || !km || !price) return responseWithStatus(500, res, "Missing Data");
        try {
            const obj = { lisence, manufacturer, model, year, km, price };
            collection.insertOne(obj);
            responseWithStatus(200, res, "car added");
        } catch (error) {
            responseWithStatus(500, res, "something wrong..." + error);
        }

    });

    app.get('/car', async (req, res, next) => {
        const { lisence } = req.query;
        if (!lisence) next();
        else {
            try {
                const car = await collection.find({ lisence }).toArray();
                responseWithStatus(200, res, car);
            } catch (error) {
                responseWithStatus(500, res, "something wrong..." + error);
            }

        }
    });

    app.get('/cars', async (req, res, next) => {
        const { yearStart, yearEnd } = req.query;
        if (!yearStart || !yearEnd) {
            next();
        }
        else {
            try {
                const cars = await collection.find({ year: { $gte: yearStart, $lte: yearEnd } }).toArray();
                responseWithStatus(200, res, cars);
            } catch (error) {
                responseWithStatus(500, res, "something wrong..." + error);
            }

        }
    });

    app.get('/cars', async (req, res, next) => {
        const { manufacturer } = req.query;
        const models = [];
        if (!manufacturer) {
            next();
        }
        else {
            try {
                const cars = await collection.find({ manufacturer }).toArray();
                cars.forEach((item) => {
                    if (item.manufacturer === manufacturer) {
                        models.push({ model: item.model });
                    }
                });
                responseWithStatus(200, res, models);
            } catch (error) {
                responseWithStatus(500, res, "something wrong..." + error);
            }

        }
    });

    app.get('/cars', async (req, res) => {
        const { model } = req.query;
        const carsModelAndPrices = [];
        if (!model) return responseWithStatus(500, res, "Missing Data");
        try {
            const cars = await collection.find({ model }).toArray();
            cars.forEach((item) => {
                if (item.model === model) {
                    carsModelAndPrices.push({ model: item.model, price: item.price });
                }
            });
            responseWithStatus(200, res, carsModelAndPrices);
        } catch (error) {
            responseWithStatus(500, res, "something wrong..." + error);
        }

    });

    app.get('/car', async (req, res) => {
        const { lisenceOne, lisenceTwo } = req.query;
        if (!lisenceOne || !lisenceTwo) return responseWithStatus(500, res, "Missing Data");
        try {
            const car1 = await collection.find({ lisence: lisenceOne }).toArray();
            const car2 = await collection.find({ lisence: lisenceTwo }).toArray();
            const car = Number(car1[0].price) > Number(car2[0].price) ? car1[0] : car2[0];
            responseWithStatus(200, res, car);
        } catch (error) {
            responseWithStatus(500, res, "something wrong..." + error);
        }

    });

});

function responseWithStatus(status, response, message) {
    response.status(status).send({
        message
    });
}

app.listen(port, () => console.log(`listen to ${port}`));