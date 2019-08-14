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
        const { name, score } = req.body.player;console.log( name, score );
        if (!name || !score) responseWithStatus(200, res, "Missing Data");
        try {
            collection.insertOne({ name, score });
            responseWithStatus(200, res, "Added Succussfuly");
        }
        catch (ex) {
            console.log(ex);
            responseWithStatus(500, res, "Missing Data");
        }
    })


    router.get('/high-score', (req, res) => {
        try {
            collection.find().sort( { score: -1 } ).limit( 10 ).toArray((err, data) => {
                if (err) return console.error("ERROR OCCURED:", err);
                console.log(data);
                res.status(200).send(data);
            })
        }
        catch (ex) {
            console.log(ex);
            responseWithStatus(500, res, "Missing Data");
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