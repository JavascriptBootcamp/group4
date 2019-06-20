
const express = require("express");
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

const port = 5000;

const data = {
    songs: [
        { id: 0, title: "abc", singer: "adam", words: "aba saba" },
        { id: 1, title: "sbc", singer: "adam", words: "aba saba" }
    ]
};

app.get('/songs', (request, response) => {
    try {
        const sortBy = request.query.sort;
        if (sortBy != undefined) {
            console.log(data.songs);
            data.songs.sort(sortSongs(sortBy));
            console.log(sortBy);
        }

        response.status(200);
        response.end(JSON.stringify(data.songs));
    }
    catch (ex) {
        response.status(500).json({
            result: "Internal Server Error"
        })
    }
});


app.post('/song', (request, response) => {
    try {
        const id = Math.floor(Math.random() * 100);
        const { title, singer, words } = request.body;
        data.songs.push({ id, title, singer, words });
        console.log("Add song: " + request.body.title);
        response.status(200).json({
            status: "success"
        })
    }
    catch (ex) {
        response.status(500).json({
            result: "Internal Server Error"
        })
    }
});

app.delete('/song/:id', (request, response) => {
    try {
        const id = Number(request.params.id);
        const songIndex = getIndexById(data.songs, id);
        data.songs.splice(songIndex, 1);
        console.log("Remove song: " + id);
        response.status(200).json({
            status: "success"
        })
    }
    catch (ex) {
        response.status(500).json({
            result: "Internal Server Error"
        })
    }
});


app.put('/song/:id', (request, response) => {
    try {
        const id = Number(request.params.id);
        const { title, singer, words } = request.body;
        const songIndex = getIndexById(data.songs, id);

        data.songs[songIndex].title = title;
        data.songs[songIndex].singer = singer;
        data.songs[songIndex].words = words;

        console.log("update song: " + id);
        response.status(200).json({
            status: "success"
        })
    }
    catch (ex) {
        response.status(500).json({
            result: "Internal Server Error"
        })
    }
});

function sortSongs(a, b) {
    console.log(sortBy);
    if (a[sortBy] < b[sortBy]) {
        return -1;
    }
    if (a[sortBy] > b[sortBy]) {
        return 1;
    }
    return 0;
}

function getIndexById(arr, id) {
    return arr.findIndex(item => item.id === id);
}


app.listen(port, () => console.log(`Server is running on port ${port}`))