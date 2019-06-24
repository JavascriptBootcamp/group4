const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname,'/../client/dist/q1658')));

const data = { 
    songs: [
        { title: "עוד דקה את נעלמת", desc: "מהלהיטים הגדולים", url: "https://www.youtube.com/embed/TtpyAynxElo", artist: "זוהר ארגוב", imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoj76ZBLczee8dX4G3n5s9FKvXUIC_oPLc2y70bT-kvsnywkntNg" },
        { title: "כוכבי לילה יזהירו", desc: "מהלהיטים הגדולים", url: "https://www.youtube.com/embed/QjhIbyBpKtU", artist: "זוהר ארגוב", imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTYwhxLKsnTW4htE1P7sT3rKQQmIWNj8tNBpe_eKMFodsM_JmWnw" },
        { title: "עוד דקה את נעלמת", desc: "מהלהיטים הגדולים", url: "https://www.youtube.com/embed/TtpyAynxElo", artist: "זוהר ארגוב", imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoj76ZBLczee8dX4G3n5s9FKvXUIC_oPLc2y70bT-kvsnywkntNg" },
        { title: "כוכבי לילה יזהירו", desc: "מהלהיטים הגדולים", url: "https://www.youtube.com/embed/QjhIbyBpKtU", artist: "זוהר ארגוב", imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTYwhxLKsnTW4htE1P7sT3rKQQmIWNj8tNBpe_eKMFodsM_JmWnw" },  
        { title: "עוד דקה את נעלמת", desc: "מהלהיטים הגדולים", url: "https://www.youtube.com/embed/TtpyAynxElo", artist: "זוהר ארגוב", imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoj76ZBLczee8dX4G3n5s9FKvXUIC_oPLc2y70bT-kvsnywkntNg" },
        { title: "כוכבי לילה יזהירו", desc: "מהלהיטים הגדולים", url: "https://www.youtube.com/embed/QjhIbyBpKtU", artist: "זוהר ארגוב", imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTYwhxLKsnTW4htE1P7sT3rKQQmIWNj8tNBpe_eKMFodsM_JmWnw" },  
        { title: "עוד דקה את נעלמת", desc: "מהלהיטים הגדולים", url: "https://www.youtube.com/embed/TtpyAynxElo", artist: "זוהר ארגוב", imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoj76ZBLczee8dX4G3n5s9FKvXUIC_oPLc2y70bT-kvsnywkntNg" },
        { title: "כוכבי לילה יזהירו", desc: "מהלהיטים הגדולים", url: "https://www.youtube.com/embed/QjhIbyBpKtU", artist: "זוהר ארגוב", imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTYwhxLKsnTW4htE1P7sT3rKQQmIWNj8tNBpe_eKMFodsM_JmWnw" },  
        { title: "עוד דקה את נעלמת", desc: "מהלהיטים הגדולים", url: "https://www.youtube.com/embed/TtpyAynxElo", artist: "זוהר ארגוב", imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoj76ZBLczee8dX4G3n5s9FKvXUIC_oPLc2y70bT-kvsnywkntNg" },
        { title: "כוכבי לילה יזהירו", desc: "מהלהיטים הגדולים", url: "https://www.youtube.com/embed/QjhIbyBpKtU", artist: "זוהר ארגוב", imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTYwhxLKsnTW4htE1P7sT3rKQQmIWNj8tNBpe_eKMFodsM_JmWnw" }
      ]
};

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
        const { title, artist, desc, url, imageSrc } = req.body;
        const newSong = { id, title, artist, desc, url, imageSrc}
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
        const { title, artist, desc, url, imageSrc } = req.body;
        const newSong = { id, title, artist, desc, url, imageSrc };
        const index = getIndex(data.songs, +id);
        data.songs[index] = newSong;
        res.status(200);
        res.json(data.songs);
    }
    catch (ex) {
        res.status(500);
    }
})

app.listen(8000, () => { console.log("server is running!") })



