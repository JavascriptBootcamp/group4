Array.prototype.mySliceFunction =
    function (min, max) {
        slicedArr = [];
        for (var i = min; i <= max; i++)
            slicedArr.push(this[i]);
        return slicedArr;

    }

var arr = [1, 2, 5, 7];
var sliced = arr.mySliceFunction(1, 2);
console.log(sliced);
