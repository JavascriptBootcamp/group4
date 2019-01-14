
var arr = [1, 2, 5, 7];

function myFilter(arr,callback){
    var filteredArr=[];

    for (var i = 0 ; i < arr.length ; i ++){
        if (callback(arr[i]))
            filteredArr.push(arr[i]);
    }
   return filteredArr;
}

var filtered = myFilter(arr, function(item){
     return item % 2 === 0;
});

console.log(filtered);

