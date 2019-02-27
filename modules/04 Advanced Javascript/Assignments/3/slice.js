Array.prototype.mySliceFunction = function (start, end) {
    if (start < 0) {
        start += this.length;
    }
    if (end < 0) {
        end += this.length;
    }
    var sliceArr = [];
    for (var i = start; i < end; i++) {
        sliceArr.push(this[i]);
    }
    return sliceArr;
}

var arr = [1, 2, 5, 7];
var sliced = arr.mySliceFunction(1, 2);
console.log(sliced);