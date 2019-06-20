const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;
app.use(express.json());
app.use(cors());

let songs = {
    "songs": [
        { id: "1", title: "song15", singer: "singer1", words: "words1" },
        { id: "2", title: "song2", singer: "singer2", words: "words2" },
        { id: "3", title: "song33", singer: "singer3", words: "words3" },
        { id: "4", title: "song1", singer: "singer4", words: "words4" },
        { id: "5", title: "song9", singer: "singer5", words: "words5" }
    ]
}

app.get('/songs', (req, res, next) => {
    const sortString = req.query.sort;
    if (!sortString) {
        next();
    }
    else {
        let songsFilterd = [].concat(songs.songs);
        songsFilterd.sort((a, b) => (a[sortString] > b[sortString]) ? 1 : -1)
        res.status(200).send(songsFilterd);
    }

});

app.get('/songs', (req, res) => {
    res.status(200).send(songs);
});



app.listen(port, () => console.log(`listen on port ${port}`));
