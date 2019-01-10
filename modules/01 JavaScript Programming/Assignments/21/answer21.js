function max(arr){
    var max = arr[0];
    for (var i = 0; i < arr.length; i++) {
        arr[i] > max ? max = arr[i] : "";
    }
    console.log(max);
}