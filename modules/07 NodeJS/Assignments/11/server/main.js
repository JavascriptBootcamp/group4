const express = require('express');
const cors = require('cors');
const songs = require('./songs');
const songsObjs = songs.songsObjects;

const app = express();

app.use(express.json());
app.use(cors());




// Sends all songs as JSON response
app.get('/songs', (req, resp, next) => {
    if(Object.keys(req.query).length === 0) resp.send(songs.songsObjects);
    else next();
});


// Sorts and sends sorted songs by "sort" querystring
app.get('/songs', (req, resp) => {
    try {
        let sortBy = req.query.sort;

        if (sortBy === 'id' || 
            sortBy === 'title' || 
            sortBy === 'singer' || 
            sortBy === 'words') {
            sortedSongs = getSortByParam(sortBy); 
        }
        else if (sortBy !== '') {
            throw `Can't sort by ${sortBy}, can sort just by: id, title, singer, words`;
        }
        else throw 'Please give a param to sort by!'
            
        resp.statusCode = 200;
        resp.send(sortedSongs);
    } 
    catch (error) {
        resp.statusCode = 500;
        resp.send({ response: error });
    }
});

function getSortByParam(sortingBy) {
    return songs.songsObjects.sort(
        (prev, next) => 
        prev[sortingBy] < next[sortingBy] ? -1 
        : prev[sortingBy] > next[sortingBy] ? 1 : 0);
}


// Adds a new song
app.post('/song', (req, resp) => {
    const id = Math.floor(Math.random() * 10000);

    try {
        songs.songsObjects.push({
            id,
            title: req.body.title,
            singer: req.body.singer,
            words: req.body.words
        });
        resp.statusCode = 200;
        resp.send({ response: "success" });

    } catch (error) {
        resp.statusCode = 500;
        resp.send({ response: error });
    }
});





// Load the songs from server side
app.post('/loadSongs', (req, resp) => {
    //console.log(songsObjs);
    resp.send(songsObjs)
});





// Deletes a song by id
app.delete('/song/:id', (req, resp) => {
    const songId = Number(req.params.id);

    try {
        const songsObjectsIndex = getSongsObjectsIndexById(songId);
        songs.songsObjects.splice(songsObjectsIndex, 1);

        resp.statusCode = 200;
        resp.send({ response: "success" });
    } catch (error) {
        resp.statusCode = 500;
        resp.send({ response: error });
    }
});


//  updates a song by id
app.put('/song/:id', (req, resp) => {
    const songId = Number(req.params.id);

    try {
        const songsObjectsIndex = getSongsObjectsIndexById(songId);
        const songObj = songs.songsObjects[songsObjectsIndex];
        songObj.title = req.body.title;
        songObj.singer = req.body.singer;
        songObj.words = req.body.words;

        resp.statusCode = 200;
        resp.send({ response: "success" });
    } catch (error) {
        resp.statusCode = 500;
        resp.send({ response: error });
    }
});

function getSongsObjectsIndexById(id) {
    return songs.songsObjects.findIndex(songObj => songObj.id === id);
}


port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));