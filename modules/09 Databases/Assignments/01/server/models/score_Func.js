function sortArray(arr, sortBy) {
    
        return arr.sort((a, b) => a[sortBy] > b[sortBy] ? -1 : a[sortBy] < b[sortBy] ? 1 : 0);
    
    }
    
    
    function isArrayFull() {
    
        return data.players.length > 10;
    
    }


   

    module.exports = {sortArray,isArrayFull};