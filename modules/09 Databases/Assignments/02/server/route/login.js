const express = require('express');
const app = express();
const router = express.Router();
const { MongoClient } = require('mongodb');
const url = 'mongodb://127.0.0.1:27017';



MongoClient.connect(url, (err, dbs) => {

    const dbName = 'cars';
    const db = dbs.db(dbName);
    const collectionName = "admin";
    const collection = db.collection(collectionName);

    router.post('/admin', (req, res) => {
        let { username, password } = req.body;
        if (!username || !password) return responseWithStatus(500, res, "Missing Data");
        try {
            password = Buffer.from(password).toString('base64');
            const obj = { username, password };
            collection.insertOne(obj);
            responseWithStatus(200, res, "user admin added");
        } catch (error) {
            responseWithStatus(500, res, "something wrong..." + error);
        }
    });

    router.get('/admin', async (req, res) => {
        const { username, password } = req.query;
        if (!username || !password) return responseWithStatus(500, res, "Missing Data");
        else {
            try {
                const user = await collection.find({ username, password }).toArray();
                if (user.length) {
                    responseWithStatus(200, res, true);
                }
                else {
                    responseWithStatus(200, res, false);
                }
            } catch (error) {
                responseWithStatus(500, res, "something wrong..." + error);
            }
        }
    });

    function responseWithStatus(status, response, message) {
        response.status(status).send({
            message
        });
    }


});

module.exports = router;

