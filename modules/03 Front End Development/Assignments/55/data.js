var Storage = function (storageType) {
    var storageType = storageType;
	var obj = {"localStorage":localStorage , "sessionStorage":sessionStorage};
    var setItem = function (value, key) {
        obj[storageType].setItem(value, key);
    }
    var getItem = function (key) {
        return obj[storageType].getItem(key);
    }
    var removeItem = function (key) {
        return obj[storageType].removeItem(key);
    }
    var clear = function () {
        obj[storageType].clear();
    }
    return {
        setItem: setItem,
        getItem: getItem,
        removeItem: removeItem,
        clear: clear
    }
}

var st1 = new Storage("sessionStorage");