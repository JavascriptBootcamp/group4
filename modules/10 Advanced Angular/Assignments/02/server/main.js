
const express = require('express');
const app = express();
const cors = require('cors');
const { deleteSong, addSong, sortSongs, updateSong } = require('./models/song');
const { compare } = require('./models/compare');
const data = require('./songs');

app.use(cors());
app.use(express.json());



// Add song
app.post('/song', (req, resp) => {
    try {
        const id = Math.floor(Math.random() * 100000);
        const { title, singer, words } = req.body;
        data.songs = addSong(data.songs, { id, title, singer, words });
        resp.status(200);
        resp.json(data.songs);
    }
    catch (ex) {
        resp.status(500);
    }

})


// Sorting songs
app.get('/songs', (req, resp, next) => {

    const { sort } = req.query;
    if (sort) {
        const songsArr = sortSongs(data.songs);
        resp.json(songsArr);
    }
    else
        next();
})

app.get('/songs', (req, res) => {
    res.json(data["songs"]);
})

app.delete('/song/:id', (req, res) => {

    try {
        const { id } = req.params;
        const index = getIndex(data.songs, +id);
        data.songs = deleteSong(data.songs, index);
        res.status(200);
        res.json(data.songs);
    }
    catch (ex) {
        res.status(500);
    }
})


function getIndex(arr, identifyer) {
    return arr.findIndex(s => s.id === identifyer);
}

app.put('/song/:id', (req, res) => {
    try {
        const { id } = req.params;
        const { title, singer, words } = req.body;
        const index = getIndex(data.songs, +id);
        data.songs = updateSong(data.songs,  { id, title, singer, words }, index);
        res.status(200);
        res.json(data.songs);
    }
    catch (ex) {
        res.status(500);
    }
})


app.listen(8000, () => { console.log("server is running!") });
