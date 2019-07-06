const express = require('express');

const router = express.Router();
const RecipesModel = require('../models/RecipesModel');

const scoreFunc = require('../models/score_Func');
const data = require('../models/data');

router.get('/score', (req, res) => {
    try {
        RecipesModel.find({}, (error, score) => res.send(score));

    }
    catch (ex) {
        console.log(ex);
        res.sendStatus(500);
    }
})



router.post('/high-score', (req, res) => {
    try {
        const { name, score } = req.body.player;
        const scoresModel = new RecipesModel({
            players: { 
                score:score,
                name: name,
               
             }
        });
        if (!scoreFunc.isArrayFull()) {
            RecipesModel.insertOne( scoresModel.players);
            data.players.push(scoresModel.players);
            scoreFunc.sortArray(data.players, "score");
        }
        else {
            const toDel = data.players[9].name;
            if (score > data.players[9].score) {
                let s = RecipesModel.deleteOne( {name:toDel} );
                s = RecipesModel.insertOne( { name, score });
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



})

module.exports = router;