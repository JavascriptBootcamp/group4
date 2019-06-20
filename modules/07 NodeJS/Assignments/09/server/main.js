const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

const port = 5000;
let songs = {
    songs:[ 
    {id:"1", title: "song1", singer: "singer1", words:"words1"},
    {id:"4", title: "song4", singer: "singer4", words:"words4"},    
    {id:"3", title: "song3", singer: "singer3", words:"words3"},
    {id:"2", title: "song2", singer: "singer2", words:"words2"},
    {id:"5", title: "song5", singer: "singer5", words:"words5"} ]
};

app.get('/songs',(req,res,next)=>{
    const sortBy = req.query.sort;
    console.log("sortBy:",sortBy);
    if(sortBy){
        let sortedSongs = [].concat(songs.songs);
        sortedSongs.sort( (a,b)=> a[sortBy] > b[sortBy] ? 1 : -1);
        console.log("sortedSongs:",sortedSongs,songs.songs);
        res.status(200).send({songs : sortedSongs});
    }
    else
        next();
});

app.get('/songs',(req,res)=>{
    res.status(200).send(songs);
});

app.get('/song',(req,res)=>{
    const singer = req.query.singer;
    const singerSongs = songs.songs.filter(item=>item.singer === singer);
    res.status(200).send({songs:singerSongs});
});

app.post('/song',(req,res)=>{
    const id = Math.floor(Math.random()*10000);
    let song = req.body;
    song.id = id;
    console.log("song",song);
    songs.songs.push(song);
    res.status(200).send("OK");
});

app.delete('/song',(req,res)=>{
    const id = req.params;  
    const songIndex = getSongIndex(+id);
    songs.songs.splice()  
});

function getSongIndex(id){
    return songs.songs.filter((item,index)=>{
        item.id === id ? index : -1;
    })[0];
    // for(let i=0;i<songs.songs.length;i++){
    //     songs.songs[i] . id
    // }

}
app.listen(port, ()=>console.log(`Server is running on port ${port}`));

