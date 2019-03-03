Array.prototype.mySliceFunction = function(index1,index2){
    var sliced = [];
    for (var i = index1; i <= index2; i++) {
        sliced.push(this[i]);
    }
    return sliced;
}
var arr = [1, 2, 5, 7];
var sliced = arr.mySliceFunction(1,2);
console.log(sliced);