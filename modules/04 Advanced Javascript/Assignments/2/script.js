function Storage(storageType) {
    var storageType = eval(storageType);

    function getItem(key) {
        return storageType.getItem(key);
    }
    function setItem(key, value) {
        storageType.setItem(key, value);
    }
    function removeItem(key) {
        storageType.removeItem(key);
    }
    function clear() {
        storageType.clear();
    }

    return {
        getItem: getItem,
        setItem: setItem,
        removeItem: removeItem,
        clear: clear
    };

}

var lStorage = new Storage("localStorage");
lStorage.setItem("someKey1", "someValue1");
console.log(lStorage.getItem("someKey1"));

var sStorage = new Storage("sessionStorage");
sStorage.setItem("someKey2", "someValue2");
console.log(sStorage.getItem("someKey2"));