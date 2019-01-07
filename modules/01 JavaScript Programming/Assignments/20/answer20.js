
function myFilter (arr,func) {
    arr2 = []
    for (var i=0; i < arr.length ; i++) {
        if (func(arr[i])) {
            arr2.push(arr[i]);
        }
    }
    return arr2;
}
