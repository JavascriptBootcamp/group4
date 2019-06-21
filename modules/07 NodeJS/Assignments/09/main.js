const express = require('express');

const app = express();
app.use(express.json());

let songs = {
    songs: [
        { id: "1", title: "Where have all the cowboys gone", singer: "Paula Cole", words: "Where is my John Wayne" },
        { id: "2", title: "The lady in red", singer: "Chris de Burgh", words: "The lady in red is dancing with me" },
        { id: "3", title: "Cheri, Cheri Lady", singer: "Modern Talking", words: "Cheri, Cheri Lady love is in the motion" },
        { id: "4", title: "Human Nature", singer: "Michael Jackson", words: "Why, why, tell 'em that it's human nature" },
        { id: "5", title: "Freedom", singer: "George Michael", words: "All we have to do now " }
    ]
}


app.get('/songs', (req, res, next) => {
    const q = req.query.sort;
    const arr = Object.keys(songs["songs"][0]);

    if (q) {
        if (arr.lastIndexOf(q) >= 0) {
            songs["songs"].sort((a, b) => {
                return a[q] > b[q];
            });
        }
        else {
            res.status(500).json({ error: "sort parametrs is not valid" });
        }
    }
    else {
        next();
    }
});

app.get('/songs', (req, res) => {
    res.json(songs);
});

app.post('/song', (req, res) => {
    const id = Math.floor(Math.random() * 10) + songs["songs"].length;
    try {
        const { title, singer, words } = req.body;
        songs["songs"].push({ id, title, singer, words });
        res.json({
            status: "OK"
        });
    }
    catch {
        res.json({
            status: "Error"
        });
    }
});

app.delete('/song/:id', (req, res) => {
    const id = req.params.id;
    let findIndex = -1;
    try {
        for (let index = 0; index < songs["songs"].length; index++) {
            if (songs["songs"][index].id === id) {
                findIndex = index;
            }
        }
        songs["songs"].splice(findIndex, 1);
        res.json({
            status: "OK"
        });
    }
    catch {
        res.json({
            status: "Error"
        });
    }
});

app.put('/song/:id', (req, res) => {
    const id = req.params.id;
    let findIndex = -1;

    let { title, singer, words } = req.body;
    title = title + "Modified";
    singer = singer + "Modified";
    words = words + "Modified";


    for (let index = 0; index < songs["songs"].length; index++) {
        if (songs["songs"][index].id === id) {
            findIndex = index;
        }
    }
    try {
        songs["songs"].splice(findIndex, 1, { id, title, singer, words });

        res.json({
            status: "OK"
        });
    }
    catch {
        res.json({
            status: "Error"
        });
    }
});


app.listen(5001, () => console.log("Server starts at 5001"));


