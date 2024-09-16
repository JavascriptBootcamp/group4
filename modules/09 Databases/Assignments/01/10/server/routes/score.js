const express = require('express');
const app = express();
const router = express.Router();
const mongo = require('mongodb');
const url = "mongodb://127.0.0.1:27017";

mongo.MongoClient.connect(url, (err, databases) => {
    if (err) return console.error(err);

    let highscore;
    const maxScores = 10;
    const dbName = 'trivia';
    const collectionName = "highscore";
    const db = databases.db(dbName);
    const collection = db.collection(collectionName);

    router.get('/', async (req, res) => {
        const data = await collection.find().toArray();
        data.sort((a, b) => Number(a.score) < Number(b.score) ? 1 : -1);
        res.send(data);
    });

    router.post('/score', async (req, res, next) => {
        let data = await collection.find().toArray();
        highscore = ++data.length;
        if (highscore <= maxScores) {
            const { name, score } = req.body;
            Number(score)
            collection.insertOne({ name, score });
            data = await collection.find().toArray();
            data.sort((a, b) => Number(a.score) < Number(b.score) ? 1 : -1);
            res.send("insert ok");
        }
        else {
            next();
        }
    });

    router.post('/score', async (req, res) => {
        const { name, score } = req.body;
        let data = await collection.find().toArray();
        data.sort((a, b) => Number(a.score) < Number(b.score) ? 1 : -1);
        const lastDoc = data[data.length - 1];
        if (data.some(item => Number(score) > Number(item.score))) {
            collection.deleteOne({ _id: lastDoc._id });
            collection.insertOne({ name, score })
        }
        data.sort((a, b) => Number(a.score) < Number(b.score) ? 1 : -1);
        res.send("insert ok");
    });
});


module.exports = router;