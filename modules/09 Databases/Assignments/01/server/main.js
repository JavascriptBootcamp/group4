const express = require('express');
const app = express();
const scoreFunc = require('../server/models/score_Func');
const quizData = require('../server/models/data');

const mongo = require('mongodb');
const dbUrl = 'mongodb://127.0.0.1:27017';

const path = require('path');

const cors = require('cors');
app.use(express.json());
app.use(cors());


const scoreRouter = require('./routes/score');
const quizRouter = require('./routes/quiz');

app.use('/',scoreRouter);

app.use('/quiz',quizRouter);



const onConnect = (err, databases) => {
    if (err) return console.error("ERROR OCCURED:", err);

    const dbName = 'game';
    const db = databases.db(dbName);
    const collectionName = 'scores';
    const scoresCollection = db.collection(collectionName);

    sortScores(scoresCollection, "score");

    app.get('/score', async(req, resp) => {
        try {
            if(!quizData.players)  quizData.players = await scoresCollection.find().toArray();    
            resp.status(200).json(quizData.players);
        }
        catch (ex) {
            resp.sendStatus(500);
        }
    });


    app.post('/higherScore', (req, resp) => {
        try {
        const { name, score } = req.body.player;

        if (!scoreFunc.isArrayFull()) {
            scoresCollection.insertOne( { name, score });
            quizData.players.push({ name, score });
            scoreFunc.sortArray(quizData.players, "score");
        }
        else {
            const participantToDelete = quizData.players[9].name;
            if (score > quizData.players[9].score) {
                let sc = scoresCollection.deleteOne( {name: participantToDelete} );
                sc = scoresCollection.insertOne( { name, score });
                quizData.players[9] = { name, score };
                scoreFunc.sortArray(quizData.players, "score");
            }
        }
        resp.status(200).json(quizData.players);
    }
    catch (ex) {
        console.log(ex);
        resp.sendStatus(500);
    }
    });
}


const sortScores = async(collection, sortBy)=> {
    const players = await collection.find().toArray();
    quizData.players = scoreFunc.sortArray(players, sortBy);
}

mongo.MongoClient.connect(dbUrl, onConnect);


const port = 8000;
app.listen(port, () => console.log(`server is running on port ${port}`));
