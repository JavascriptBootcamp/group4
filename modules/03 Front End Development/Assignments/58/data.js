function saveData(lastVideo){
    localStorage.setItem('itube',lastVideo);
}

function getData(){
    return localStorage.getItem('itube');;
}