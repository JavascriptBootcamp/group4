const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());


const data = {
    videos: [
        {
            src: "https://www.youtube.com/embed/ZSM3w1v-A_Y",
            title: "Apologize",
            artist: "OneRepublic",
            description: "Very Good song"
        },
        {
            src: "https://www.youtube.com/embed/kPBzTxZQG5Q",
            title: "Here Without You",
            artist: "3 Doors Down",
            description: "Powerful Song"
        },
        {
            src: "https://www.youtube.com/embed/YK0jRV9uFec",
            title: "It's Over",
            artist: "Level 42",
            description: "back from the 80's"
        }
    ]
};



app.get('/songs', (req, res, next) => {

    const { sort } = req.query;
    if (sort) {
        const songsArr = [...data.videos];
        songsArr.sort(compare);
        res.json(songsArr);
    }
    else
        next();
})

app.get('/songs', (req, res) => {

    res.json(data["videos"]);

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


function getIndex(arr, identifyer) {

    return arr.findIndex(s => s.id === identifyer);

}

app.listen(5000, () => { console.log("server is running!") })



