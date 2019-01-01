var arr = [1, 2, 5, 7];

var filtered = function (arr, fn) {
    for (var i = 0; i < arr.length; i++)
        console.log(fn(arr[i]));
}

var checkEven = function (value) {
    return value % 2 === 0;
}

filtered(arr, checkEven);