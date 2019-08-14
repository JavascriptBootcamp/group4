const express = require('express');
const mongo = require('mongodb');

const router = express.Router();

const scoreFunc = require('../models/score_Func');
const data = require('../models/data');

const dbUrl = 'mongodb://127.0.0.1:27017';

const onConnect = (err, databases) => {
    if (err) return console.error("ERROR OCCURED:", err);

    const dbName = 'quiz';
    const db = databases.db(dbName);
    const collectionName = 'high-score';
    const collection = db.collection(collectionName);

    router.get('/score', (req, res) => {
        try {
            collection.find().sort({ score: -1 }).toArray((err, dataFromdb) => {
                if (err) return console.error("ERROR OCCURED:", err);
                responseWithStatus(200, res, dataFromdb);
            })
        }
        catch (error) {
            responseWithStatus(500, res, "something wrong..." + error);
        }

    });


    router.post('/high-score', (req, res) => {
        try {

            const { name, score } = req.body.player;
            if (!name || !score) return responseWithStatus(500, res, "Missing Data");
            //get from db
            collection.find().sort({ score: -1 }).toArray((err, dataFromdb) => {
                if (err) return console.error("ERROR OCCURED:", err);
                data.players = dataFromdb;

                if (scoreFunc.isArrayFull()) {
                    data.players.push({ name, score });
                    scoreFunc.sortArray(data.players, "score");
                    //insert to db
                    const player = { name, score };
                    collection.insertOne(player);
                }
                else {
                    if (score > data.players[9].score) {
                        //insert to db
                        collection.update({ "_id": data.players[9]._id }, { $set: { name, score } })

                        data.players[9] = { name, score };
                        scoreFunc.sortArray(data.players, "score");
                    }
                }
                console.log(data.players);
                responseWithStatus(200, res, data.players);
            })
        }

        catch (error) {
            responseWithStatus(500, res, "something wrong..." + error);
        }
    });


    function responseWithStatus(status, response, message) {
        response.status(status).json(message);
    }

}

mongo.MongoClient.connect(dbUrl, onConnect);

module.exports = router;