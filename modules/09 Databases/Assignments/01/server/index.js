const express = require('express');
const mongo = require('mongodb');
const cors = require('cors');
const data = require('../server/models/data');
const scoreFunc = require('../server/models/score_Func');

const app = express();
app.use(cors());

const port = 8000;
const dbUrl = 'mongodb://127.0.0.1:27017';

app.use(express.json());

const initData = async(collection, sortBy)=> {
    const players = await collection.find().toArray();
    data.players = scoreFunc.sortArray(players, sortBy);
}


const onConnect = (err, databases) => {
    if (err) return console.error("ERROR OCCURED:", err);

    const dbName = 'game';
    const db = databases.db(dbName);
    const collectionName = 'scores';
    const collection = db.collection(collectionName);

    initData(collection,"score");

    app.get('/score', async(req, res) => {
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

    app.post('/high-score', (req, res) => {
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
}

function responseWithStatus(status, response, message) {
    response.status(status).send({
        message
    });
}

mongo.MongoClient.connect(dbUrl, onConnect);

app.listen(port, () => console.log("Server is running on port: " + port));