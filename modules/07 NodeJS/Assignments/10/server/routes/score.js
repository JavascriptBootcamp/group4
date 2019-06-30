const express = require('express');

const router = express.Router();

const scoreFunc = require('../models/score_Func');
const data = require('../models/data');

router.get('/score', (req, res) => {
    try {
        res.status(200).json(data.players);
    }
    catch (ex) {
        console.log(ex);
        res.sendStatus(500);
    }
})

router.post('/high-score', (req, res) => {
    try {
        const { name, score } = req.body.player;
         console.log(req.body.player)
        if (scoreFunc.isArrayFull()) {
            data.players.push({ name, score });
            scoreFunc.sortArray(data.players, "score");
        }
        else {
            if (score > data.players[9]) {
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