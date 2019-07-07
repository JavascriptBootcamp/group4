<p>use <code>group4/Modules/07 NodeJS/Assignments/11/server</code>.</p>
<p>extract functions from Express handlers s that every function will have clear inputs and outputs.</p>
<h2>For Example - Extract functionality from DELETE:</h2>
<h4>Before:</h4>
<code>
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
</code>
<h4>After - extracted functionality is inside "removeSong" function:</h4>
<code>
<pre>
app.delete('/song/:id', (req, res) => {
    try {
        const { id } = req.params;
        const index = getIndex(data.songs, +id);
        // data.songs.splice(index, 1);
        data.songs = removeSong(data.songs, index);
        
        res.status(200);
        res.json(data.songs);
    }
    catch (ex) {
        res.status(500);
    }
});

function removeSong(songs, index) {
    let newSongs;
    newSongs = [...songs]; // clone array to prevent mutation
    newSongs.splice(index, 1);
    return newSongs;
}
</pre>
</code>
