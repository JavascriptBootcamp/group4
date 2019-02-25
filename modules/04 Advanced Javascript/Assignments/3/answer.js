var arr = [1, 2, 5, 7];
Array.prototype.mySliceFunction = function(start,end){
    var arr = [];
    for(var i = start; i <= end; i++){
        arr.push(this[i]);
    }
    return arr;
}

var sliced = arr.mySliceFunction(1,2);
console.log(sliced);