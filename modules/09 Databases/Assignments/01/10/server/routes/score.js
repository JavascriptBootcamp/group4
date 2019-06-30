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

    router.get('/', (req, res) => {
        collection.find().toArray((err, data) => {
            data.sort((a, b) => Number(a.score) < Number(b.score) ? 1 : -1);
            res.send(data);
        })
    });

    router.post('/score', (req, res, next) => {
        collection.find().toArray((err, data) => {
            highscore = ++data.length;
            if (highscore <= maxScores) {
                const { name, score } = req.body;
                Number(score)
                collection.insertOne({ name, score });
                collection.find().toArray((err, data) => {
                    data.sort((a, b) => Number(a.score) < Number(b.score) ? 1 : -1);
                    res.send("insert ok");
                })
            }
            else {
                next();
            }
        });


    });

    router.post('/score', (req, res) => {
        const { name, score } = req.body;
        collection.find().toArray(async (err, data) => {
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
});


module.exports = router;