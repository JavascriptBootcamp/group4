/*var arr = [1, 2, 5, 7];

var filtered = function (arr, fn) {
    for (var i = 0; i < arr.length; i++)
        console.log(fn(arr[i]));
}

var checkEven = function (value) {
    return value % 2 === 0;
}

filtered(arr, checkEven);*/

var arr = [1, 2, 5, 7];

function myFilter(arr, fnc) {

        return arr.filter(fnc)
}

var filtered = myFilter(arr, function (item) {
        return item % 2 === 0;
});

console.log(filtered);