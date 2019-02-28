function Storage(_storageType,_item){

var storageType = null;

if(_storageType === "localStorage"){
    storageType =  window.localStorage;
}
else if(_storageType === "sessionStorage"){
    storageType =  window.sessionStorage;
}

function get(item){

    storageType.get(item)
}
function set(item){
    
    storageType.setItem("item",item)
}
function remove(item){
    
    storageType.removeItem(item)
}
function clear(item){
    
    storageType.clear(item)
}

return {
    getItem:get,
    setItem:set,
    removeItem:remove,
    clear:clear
}

}


var storage_local = new Storage("localStorage","ron");
storage_local.setItem();
var item_local = storage_local();

var storage_session = new Storage("sessionStorage")