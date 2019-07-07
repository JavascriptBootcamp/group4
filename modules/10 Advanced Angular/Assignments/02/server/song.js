function removeSong(songs, index) {
    let newSongs;
    newSongs = [...songs]; // clone
    newSongs.splice(index, 1);
    return newSongs;
}

function addSong(songs,newSong){
    let newSongs;
    newSongs = [...songs]; // clone
    newSongs.push(newSong);
    return newSongs;
}

function updateSong(songs,newSong,index){
    let newSongsArr;
    newSongsArr = [...songs]; // clone
    newSongsArr[index] = newSong;
    return newSongsArr;
}

module.exports = {
    removeSong,
    addSong,
    updateSong
}