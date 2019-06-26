const express = require("express");
const app = express();
const cors = require('cors');
const path = require('path');

app.use(cors());
app.use(express.json());

const port = 5000;

const data = {
    songs: [
        { id: 0, title: "Mehila", artistName: "Ehud Banai",  videoSrc: "https://www.youtube.com/embed/qC1soMJisv8", imgSrc:"https://www.nordic.media/wp-content/uploads/2017/02/Nordic-Media-Icon.png" },
        { id: 1, title: "Achshav Nish'arnu Shney'nu", artistName: "Idan Raichel",  videoSrc: "https://www.youtube.com/embed/eE3aM-pLV-8", imgSrc:"https://www.nordic.media/wp-content/uploads/2017/02/Nordic-Media-Icon.png"  },
        { id: 2, title: "Mishehu iti kan", artistName: "Bnaya Barebi",  videoSrc: "https://www.youtube.com/embed/0AXs8_kBqA0", imgSrc:"https://www.nordic.media/wp-content/uploads/2017/02/Nordic-Media-Icon.png" },
        { id: 3, title: "Mehila", artistName: "Ehud Banai",  videoSrc: "https://www.youtube.com/embed/qC1soMJisv8", imgSrc:"https://www.nordic.media/wp-content/uploads/2017/02/Nordic-Media-Icon.png" },
        { id: 4, title: "Achshav Nish'arnu Shney'nu", artistName: "Idan Raichel",  videoSrc: "https://www.youtube.com/embed/eE3aM-pLV-8", imgSrc:"https://www.nordic.media/wp-content/uploads/2017/02/Nordic-Media-Icon.png"  },
        { id: 5, title: "Mishehu iti kan", artistName: "Bnaya Barebi",  videoSrc: "https://www.youtube.com/embed/0AXs8_kBqA0", imgSrc:"https://www.nordic.media/wp-content/uploads/2017/02/Nordic-Media-Icon.png" },
          ]
};

app.use(express.static(path.join(__dirname,"ITube")));

app.get('/songs', (request, response) => {

    try {
        const sortBy = request.query.sort;
        if (sortBy != undefined) {     //if get /songs?sort=""
            console.log(data.songs);
            data.songs = sortSongs(sortBy);
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


function sortSongs(sortBy) {
    console.log(sortBy);
    return data.songs.sort((a, b) => a[sortBy] < b[sortBy] ? -1 : a[sortBy] > b[sortBy] ? 1 : 0);
}


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



function getIndexById(arr, id) {
    return arr.findIndex(item => item.id === id);
}



app.listen(port, () => console.log(`Server is running on port ${port}`))