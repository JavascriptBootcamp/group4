Array.prototype.mySliceFunction = function (start, end) {
    var arrTemp = [];
    if (end < start) {
        return arrTemp;
    } else {
        var last = (end+1 <= this.length) ? end+1 : this.length;
        arrTemp = this.slice(start,last);
        return arrTemp;
    }
};

var arr = [1, 2, 5, 7];
var sliced = arr.mySliceFunction(1, 2);
console.log(sliced);
