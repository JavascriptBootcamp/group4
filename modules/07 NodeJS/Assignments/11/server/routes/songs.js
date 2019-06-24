const express = require('express');
const router = express.Router();
const data = require('../modules/data');
const func = require('../modules/functions');

router.get('/songs', (req, res, next) => {

    const { sort } = req.query;
    if (sort) {
        const songsArr = func.sortArray([...data.songs], sort);
        res.json(songsArr);
    }
    else
        next();
})



router.get('/songs', (req, res) => {

    res.json(data["songs"]);

})


router.post('/song', (req, res) => {

    try {
        const id = Math.floor(Math.random() * 100000);
        const { title, singers, desc } = req.body;
        const imageSrc="http://downloadicons.net/sites/default/files/windows-media-player-icon-66464.png";
        const newSong = { id, title, singers, desc,imageSrc }
        data.songs.push(newSong);
        res.status(200).json(data.songs);
    }
    catch (ex) {
        res.status(500);
    }

})

router.delete('/song/:id', (req, res) => {

    try {
        const { id } = req.params;
        const index = func.getIndex(data.songs, +id);
        data.songs.splice(index, 1);
        res.status(200).json(data.songs);
    }
    catch (ex) {
        res.status(500);
    }
})




router.put('/song/:id', (req, res) => {

    try {
        const { id } = req.params;
        const { title, singers, desc } = req.body;
        const newSong = { id, title, singers, desc }
        const index = func.getIndex(data.songs, +id);
        data.songs[index] = newSong;
        res.status(200).json(data.songs);
    }
    catch (ex) {
        res.status(500);
    }


})


module.exports = router;