Array.prototype.mySliceFunction = function (begin, end) {
    var arrSliced = [];
    for (var i = begin; i <= end; i++) {
        arrSliced.push(this[i]);
    }
    return arrSliced;
}

var arr = [1, 2, 5, 7];
var sliced = arr.mySliceFunction(1, 2);
console.log(sliced);
