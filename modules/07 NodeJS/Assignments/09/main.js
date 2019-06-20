const express = require('express');
const cors = require('cors');
const songs = require('./songs');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/songs', (request, response) => {
    let sort = request.query.sort;
    let tmpSongs = "";
    try {
        sort ? tmpSongs = sortByTitle(sort) : tmpSongs = songs.songs;

        response.statusCode = 200;
        response.send(tmpSongs);
    } catch (error) {
        response.statusCode = 500;
        response.send({ response: error });
    }
});

function sortByTitle(sort) {
    return songs.songs.sort((a, b) => a[sort] < b[sort] ? -1 : a[sort] > b[sort] ? 1 : 0);
}

app.post('/song', (request, response) => {
    const id = Math.floor(Math.random() * 10000);
    try {
        songs.songs.push({
            id,
            title: request.body.title,
            singer: request.body.singer,
            words: request.body.words
        });
        response.statusCode = 200;
        response.send({ response: "success" });

    } catch (error) {
        response.statusCode = 500;
        response.send({ response: error });
    }
});

app.delete('/song/:id', (request, response) => {
    const id = Number(request.params.id);
    try {
        const songsIndex = getIndexById(id);
        songs.songs.splice(songsIndex, 1);

        response.statusCode = 200;
        response.send({ response: "success" });
    } catch (error) {
        response.statusCode = 500;
        response.send({ response: error });
    }
});
app.put('/song/:id', (request, response) => {
    const id = Number(request.params.id);
    try {
        const songsIndex = getIndexById(id);
        const song = songs.songs[songsIndex];
        song.title = request.body.title;
        song.singer = request.body.singer;
        song.words = request.body.words;

        response.statusCode = 200;
        response.send({ response: "success" });
    } catch (error) {
        response.statusCode = 500;
        response.send({ response: error });
    }
});

function getIndexById(id) {
    return songs.songs.findIndex(song => song.id === id);
}

app.listen(5000, () => console.log("server is running in port 5000"));