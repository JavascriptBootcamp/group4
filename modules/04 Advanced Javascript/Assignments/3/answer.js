Array.prototype.mySliceFunction = function (startIndex, endIndex) {
    var newArr = [];
    for (let i = startIndex; i <= endIndex; i++) {
        newArr.push(this[i]);
    }
    return newArr;
}  



var arr = [1, 2, 5, 7];
console.log(arr.mySliceFunction(1,2));