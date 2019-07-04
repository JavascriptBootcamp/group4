const express = require('express');

const router = express.Router();

const scoreFunc = require('../models/score_Func');
const data = require('../models/data');

const mongo = require('mongodb');

const dbUrl = 'mongodb://127.0.0.1:27017';


const onConnect = (err, databases) => {
    if (err) return console.error("ERROR OCCURED:", err);

    const dbName = 'quiz_db';
    const db = databases.db(dbName);
    const collectionName = 'players';
    const collection = db.collection(collectionName);

    router.get('/score', (req, res) => {
        try {
            collection.find().toArray((err, data) => {
                if (err) return console.error("ERROR OCCURED:", err);

                console.log("data", data);
                res.status(200).json(data);
            })
        }
        catch (ex) {
            console.log(ex);
            res.sendStatus(500);
        }
    })

    router.post('/high-score', (req, res) => {
        const { name, score } = req.body.player;
        if (!name || !score) responseWithStatus(200, response, "Missing Data");
        try {
            collection.insertOne({ name, score });
            collection.find().sort( { Score: -1 } ).limit( 10 ).toArray((err, data) => {
                if (err) return console.error("ERROR OCCURED:", err);
    
                response.send(data);
            })
        }
        catch (ex) {
            console.log(ex);
            responseWithStatus(500, response, "Missing Data");
        }
    })

    function responseWithStatus(status, response, message) {
        response.status(status).send({
            message
        });
    }

}


mongo.MongoClient.connect(dbUrl, onConnect);

module.exports = router;