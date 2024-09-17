const express = require('express');
const app = express();
const router = express.Router();
const { MongoClient } = require('mongodb');
const url = 'mongodb://127.0.0.1:27017';



MongoClient.connect(url, (err, dbs) => {

    const dbName = 'cars';
    const db = dbs.db(dbName);
    const collectionName = "cars";
    const collection = db.collection(collectionName);

    router.post('/car', (req, res) => {
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

    router.get('/car', async (req, res, next) => {
        const { license } = req.query;
        if (!license) next();
        else {
            try {
                const car = await collection.find({ license }).toArray();
                responseWithStatus(200, res, car);
            } catch (error) {
                responseWithStatus(500, res, "something wrong..." + error);
            }

        }
    });

    router.get('/cars', async (req, res, next) => {
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

    router.get('/cars', async (req, res, next) => {
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

    router.get('/cars', async (req, res) => {
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

    router.get('/car', async (req, res) => {
        const { licenseOne, licenseTwo } = req.query;
        if (!licenseOne || !licenseTwo) return responseWithStatus(500, res, "Missing Data");
        try {
            const car1 = await collection.find({ license: licenseOne }).toArray();
            const car2 = await collection.find({ license: licenseTwo }).toArray();
            const car = Number(car1[0].price) > Number(car2[0].price) ? car1[0] : car2[0];
            responseWithStatus(200, res, car);
        } catch (error) {
            responseWithStatus(500, res, "something wrong..." + error);
        }

    });

    router.put('/car', (req, res) => {
        const { license, manufacturer, model, year, km, price } = req.body;

        if (!license || !manufacturer || !model || !year || !km || !price) return responseWithStatus(500, res, "Missing Data");
        try {
            collection.updateOne({ license }, { $set: { manufacturer, model, year, km, price } });
            responseWithStatus(200, res, "car updated");
        } catch (error) {
            responseWithStatus(500, res, "something wrong..." + error);
        }

    });

    router.delete('/car', (req, res) => {
        const { license } = req.body;
        if (!license) return responseWithStatus(500, res, "Missing Data");
        try {
            collection.deleteOne({ license });
            responseWithStatus(200, res, "car deleted");
        } catch (error) {
            responseWithStatus(500, res, "something wrong..." + error);
        }

    });

    function responseWithStatus(status, response, message) {
        response.status(status).send({
            message
        });
    }


});

module.exports = router;

