const express = require('express');
const mongo = require('mongodb');

const router = express.Router();

const scoreFunc = require('../models/score_Func');
const data = require('../models/data');

const dbUrl = 'mongodb://127.0.0.1:27017';

const initData = async(collection, sortBy)=> {
    const players = await collection.find().toArray();
    data.players = scoreFunc.sortArray(players, sortBy);
}

const onConnect = ( (err,databases)=>{
    const dbName = 'trivia';
    const db = databases.db(dbName);
    const collectionName = 'scores';
    const collection = db.collection(collectionName);

    initData(collection,"score");

    router.get('/score', async(req, res) => {
        try {
            if(!data.players)
                data.players = await collection.find().toArray();
            res.status(200).json(data.players);
        }
        catch (ex) {
            console.log(ex);
            res.sendStatus(500);
        }
    });
    
    router.post('/high-score', (req, res) => {
        try {
            const { name, score } = req.body.player;
            if (!scoreFunc.isArrayFull()) {
                collection.insertOne( { name, score });
                data.players.push({ name, score });
                scoreFunc.sortArray(data.players, "score");
            }
            else {
                const toDel = data.players[9].name;
                if (score > data.players[9].score) {
                    let s = collection.deleteOne( {name:toDel} );
                    s = collection.insertOne( { name, score });
                    data.players[9] = { name, score };
                    scoreFunc.sortArray(data.players, "score");
                }
            }
            res.status(200).json(data.players);
        }
        catch (ex) {
            console.log(ex);
            res.sendStatus(500);
        }
    });

});

mongo.MongoClient.connect(dbUrl, {useNewUrlParser: true } ,onConnect);

module.exports = router;