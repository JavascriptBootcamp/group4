function removeSong(songs, index) {
    let newSongs;
    newSongs = [...songs]; // clone
    newSongs.splice(index, 1);
    return newSongs;
}


function sortSongs(songs) {
    const songsArr = [...songs];
    songsArr.sort((a,b) => (a.title > b.title) ? 1 : ((a.title < b.title) ? -1 : 0));
    return songsArr;
}

function addSong(songs, song) {
    const songsArr = [...songs];
    songsArr.push(song);
    return songsArr;
}

function updateSong(songs, upSong, index) {
    const songsArr = [...songs];
    songsArr[index] = upSong;
    return songsArr;
}

module.exports = {
    removeSong,
    sortSongs,
    addSong,
    updateSong
}