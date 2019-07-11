function deleteSong(songs, index) {
    let newSongs;
    newSongs = [...songs]; // clone
    newSongs.splice(index, 1);
    return newSongs;
}


function addSong(songs, songObj) {
    const copiedSongs = [...songs];
    copiedSongs.push(songObj);
    return copiedSongs;
}


function sortSongs(songs) {
    const copiedSongs = [...songs];
    copiedSongs.sort((a,b) => (a.title > b.title) ? 1 : ((a.title < b.title) ? -1 : 0));
    return copiedSongs;
}


function updateSong(songs, songToUpdate, index) {
    const copiedSongs = [...songs];
    copiedSongs[index] = songToUpdate;
    return copiedSongs;
}

module.exports = {
    deleteSong,
    sortSongs,
    addSong,
    updateSong
} 