const express = require('express');
const app = express();
const cors = require('cors');
const data = require('./data.module');
app.use(cors());
app.use(express.json());


app.get('/songs', (req, res, next) => {

    const { sort } = req.query;
    if (sort) {
        const songsArr = [...data.songs];
        songsArr.sort(compare);
        res.json(songsArr);
    }
    else
        next();
})

app.get('/songs', (req, res) => {

    res.json(data["songs"]);

})




function compare(a, b) {
    if (a.title < b.title) {
        return -1;
    }
    if (a.title > b.title) {
        return 1;
    }
    return 0;
}


app.post('/song', (req, res) => {

    try {
        const id = Math.floor(Math.random() * 100000);
        const { title, singer, words } = req.body;
        const newSong = { id, title, singer, words }
        data.songs.push(newSong);
        res.status(200);
        res.json(data.songs);
    }
    catch (ex) {
        res.status(500);
    }

})

app.delete('/song/:id', (req, res) => {

    try {
        const { id } = req.params;
        const index = getIndex(data.songs, +id);
        data.songs.splice(index, 1);
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
        const newSong = { id, title, singer, words }
        const index = getIndex(data.songs, +id);
        data.songs[index] = newSong;
        res.status(200);
        res.json(data.songs);
    }
    catch (ex) {
        res.status(500);
    }


})


app.listen(8000, () => { console.log("server is running on port 8000") })



