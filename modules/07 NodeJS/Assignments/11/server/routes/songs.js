const express = require('express');
const songs = require('../data/songs');

const router = express.Router();

router.get('/', (req, res) => {
    res.send(songs.songs);
});

module.exports = router;