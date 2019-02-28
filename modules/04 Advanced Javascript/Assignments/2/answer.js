var Storage = function(_storageType){
    var storageType = _storageType;
    var storage = eval(storageType);
    function getItem(key){
        return storage.getItem(key);
    };
    function setItem(key,value){
        storage.setItem(key,value);
    };
    function removeItem(key){
        storage.removeItem(key);
    };
    function clear(){
        storage.clear();
    };
    return {getItem:getItem,setItem:setItem,removeItem:removeItem,clear:clear};
};


var lStorage = new Storage("localStorage");
lStorage.setItem("someKey1", "someValue1");
console.log(lStorage.getItem("someKey1")); // should print "someValue1"

var sStorage = new Storage("sessionStorage");
sStorage.setItem("someKey2", "someValue2");
console.log(sStorage.getItem("someKey2")); // should print "someValue2"