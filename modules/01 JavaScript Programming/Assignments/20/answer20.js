var arr = [1, 2, 5, 7];

var myFilter = function(arr,callback){
    var result = [];
    for (var i=0;i<arr.length;i++){
        result.push(callback(arr[i]));
    }
    return result;
}

var filtered = myFilter(arr, function(item){
     return item % 2 === 0;
});

console.log(filtered);
