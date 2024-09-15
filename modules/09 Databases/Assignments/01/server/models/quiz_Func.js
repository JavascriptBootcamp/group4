function getIndex(arr,id){

    return arr.findIndex(q=>q.id === id);
}

module.exports = {getIndex}