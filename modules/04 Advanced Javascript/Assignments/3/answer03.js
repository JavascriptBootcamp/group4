
Array.prototype.mySliceFunction = function (from, to) {
    return this.slice(from, to + 1);
}

var arr = [1, 2, 5, 7];
var sliced = arr.mySliceFunction(1, 2);
console.log(sliced);
