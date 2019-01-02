var arr = [1, 2, 5, 7, 8];

function myFilter(callback){
    
    var filteredArray = [];

    for(var i = 0; i < arr.length; i++){
        if(callback(arr[i])){
            filteredArray.push(arr[i]);
        }
    }

    return filteredArray;
}

var filtered = myFilter(function(item){
    return item % 2 === 0;
});
console.log(filtered);