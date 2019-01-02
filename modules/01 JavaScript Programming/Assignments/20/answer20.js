var arr = [1, 2, 5, 7];

function myFilter(arr, fnc) {

        return arr.filter(fnc)
}

var filtered = myFilter(arr, function (item) {
        return item % 2 === 0;
});

console.log(filtered);