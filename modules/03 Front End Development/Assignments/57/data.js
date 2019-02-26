function saveData(numberOfLikes) {
    localStorage.setItem('myStorageLike', numberOfLikes);
}

function getData() {
    return localStorage.getItem('myStorageLike');
}