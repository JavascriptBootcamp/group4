function saveData(bigPic) {
    localStorage.setItem('instush', bigPic);
}

function getData() {
    return localStorage.getItem('instush');
}