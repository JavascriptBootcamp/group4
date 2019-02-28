function saveData(key, value) {
    sessionStorage.setItem(key, value)
}

function getData(key) {
    if (typeof key !== "string") {
        console.error("key must be a string")
    }
    return sessionStorage.getItem(key);
}