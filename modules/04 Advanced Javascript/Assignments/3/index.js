

Array.prototype.mySliceFunction = function(startIndex,endIndex){

var arr = [];
for(var i=startIndex;i<=endIndex;i++){
    arr.push(this[i])
}
return arr;
}

var arr = [1, 2, 5, 7];
var sliced = arr.mySliceFunction(1,2);
console.log(sliced);