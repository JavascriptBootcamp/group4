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


var lStorage = new Storage("localStorage");
lStorage.setItem("someKey1", "someValue1");
console.log(lStorage.getItem("someKey1")); // should print "someValue1"

var sStorage = new Storage("sessionStorage");
sStorage.setItem("someKey2", "someValue2");
console.log(sStorage.getItem("someKey2")); // should print "someValue2"
