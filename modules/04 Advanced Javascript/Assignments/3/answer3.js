Array.prototype.mySliceFunction =function (start,end) {
    return this.slice(start,end+1);
}

var arr = [1, 2, 5, 7];
var sliced = arr.mySliceFunction(1,2);
console.log(sliced);
