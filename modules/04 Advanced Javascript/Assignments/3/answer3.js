var arr = [1, 2, 5, 7];
Array.prototype.mySliceFunction = function (start, end) {
    var arrReturn = [];
    for(var i=start; i<=end; i++){
        arrReturn.push(this[i]);
    }
    return arrReturn;
}
var sliced = arr.mySliceFunction(1, 2);
console.log(sliced);