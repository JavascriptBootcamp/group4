function removeSong(songs, index) {
    let newSongs;
    newSongs = [...songs]; // clone array to prevent mutation
    newSongs.splice(index, 1);
    return newSongs;
    }
app.post('/song', (req, res) => {

    try {
        const id = Math.floor(Math.random() * 100000);
        const { title, singer, words } = req.body;
        const newSong = { id, title, singer, words }
        data.songs.push(newSong);
        res.status(200);
        res.json(data.songs);
    }
    catch (ex) {
        res.status(500);
    }

})
function addSong(id, title, singer, words){

}

    module.exports = {removeSong};