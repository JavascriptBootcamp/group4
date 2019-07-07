function removeSong(songs, index) {
    let newSongs;
    newSongs = [...songs]; // clone
    newSongs.splice(index, 1);
    return newSongs;
}

module.exports = {
    removeSong
}