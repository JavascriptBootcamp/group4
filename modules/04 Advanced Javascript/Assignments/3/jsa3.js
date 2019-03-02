
Array.prototype.mySliceFunction = function (index1, index2) {
    sliced = [];
    try {
        if (index2 >= this.length)
            throw "out of range";
        else {
            for (var i = index1; i <= index2; i++)
                sliced.push(this[i]);
            return sliced;
        }
    }
    catch (error) {
        return error;
    }
}

var arr = [1, 2, 5, 7];
var sliced = arr.mySliceFunction(1, 2);
console.log(sliced);
