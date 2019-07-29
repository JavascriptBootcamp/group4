function removeSong(songs, index) {
    let newSongs;
    newSongs = [...songs]; // clone array to prevent mutation
    newSongs.splice(index, 1);
    return newSongs;
}


module.exports = {
    removeSong
};