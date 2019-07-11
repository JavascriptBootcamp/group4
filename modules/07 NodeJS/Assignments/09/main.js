const express= require('express')

const app = express();

app.use(express.json())

const songs = {
    "songs": [
        {
            id: "112",
            title: "eee",
            singer: "aba",
            words: "sigs sgfs "
        },
        {
            id: "113",
            title: "bad guy",
            singer: "billie eillish",
            words: "fdag dsg sfsdgs sg"
        },
        {
            id: "114",
            title: "talk",
            singer: "jonas brothers",
            words: "gvdnbg sdf g fds hgd"
        },
        {
            id: "115",
            title: "i dont care",
            singer: "ed sheeran",
            words: "fsdg fsdg hdg dhh "
        },
        {
            id: "116",
            title: "wow",
            singer: "post malone",
            words: "dfss a rag sdg df"
        }
    ]
}

// app.get('/songs',(request,response)=>{
//     response.json(songs.songs)
//     response.end()
// })

app.get('/songs',(request,response)=>{
    a = songs.songs.sort((a, b) => a[request.query.sort] < b[request.query.sort] ? -1 : 1)
    response.json(a)
    response.end()
})


app.listen(4000,()=>{console.log("listening to port 4000")})