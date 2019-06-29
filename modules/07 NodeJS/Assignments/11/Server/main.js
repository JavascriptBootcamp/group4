const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

const songs = [
    {videoId:"b8-tXG8KrWs",title:"Reptilia",singer:"The Strokes"},
    {videoId:"TOypSnKFHrE",title:"Last Nite",singer:"The Strokes"},
    {videoId:"yjx87opK7Aw",title:"On Melancholy Hill",singer:"Gorillaz"},
    {videoId:"Lp1fQ51YZMM",title:"Mardy Bum",singer:"Arctic Monkeys"},
    {videoId:"iV5VKdcQOJE",title:"505 lyrics",singer:"Arctic Monkeys"},
    {videoId:"S7mia9UMG4Y",title:"New Person, Same Old Mistakes",singer:"Tame Impala"},
    {videoId:"DvE7O3bLQgE",title:"Get Lucky",singer:"Daft Punk"},
    {videoId:"F1B9Fk_SgI0",title:"Feels Like Summer",singer:"Childish Gambino"},
    {videoId:"uAOR6ib95kQ",title:"DARE",singer:"Gorillaz"},
    {videoId:"hN5X4kGhAtU",title:"We Are The People",singer:"Empire Of The Sun"},
]

app.get('/songs', (req,res)=>{
    if(req.query.sort){
        console.log(req.query.sort);
        const sortedSongs = songs.sort((a,b)=>{
            return a[req.query.sort] < b[req.query.sort] ? -1:1;
        })
        res.json(sortedSongs);
    }
    else{
        console.log("new get request");
        res.json(songs);
    }
});

app.post('/songs', (req,res)=>{
    try{
        const newVideoId = req.body.videoId;
        const newTitle = req.body.title;
        const newSinger = req.body.singer;
        const newSong = {
            videoId: newVideoId,
            title: newTitle,
            singer: newSinger
        }
        songs.push(newSong);
        console.log(songs);
        res.send("new song added successfully");
    }
    catch{
        res.sendStatus(500);
    }
});

app.delete('/songs/:videoId',(req,res)=>{
    const videoId = req.params.videoId;
    const index = songs.findIndex((song)=>{
        return song.videoId === videoId;
    })
    try{
        songs.splice(index,1);
        console.log(songs);
        res.send("song removed successully");
    }
    catch{
        res.sendStatus(500);
    }
});
app.put('/songs/:videoId',(req,res)=>{
    const videoId = req.params.videoId;
    const index = songs.findIndex((song)=>{
        return song.videoId === videoId;
    })
    try{
        songs[index].title=req.body.title
        songs[index].singer=req.body.singer;
        console.log(songs);
        res.send("song adjust successully");
    }
    catch{
        res.sendStatus(500);
    }
});


app.listen(4000, ()=> console.log("listenning on port 4000..."));