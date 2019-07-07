function removeSong(songs, index) {
    let newSongs;
    newSongs = [...songs]; // clone
    newSongs.splice(index, 1);
    return newSongs;
}


function addSong(songs, newSong) {
    newSongs = [...songs]; // clone
    newSongs.push(newSong);
    return newSongs;
}


function updateSong(songs, index ,newSong) {
    newSongs = [...songs]; // clone
    newSongs[index] = newSong;
    return newSongs;
}



module.exports = {
    removeSong , addSong ,updateSong
}