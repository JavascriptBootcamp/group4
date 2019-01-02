var arr = [1, 2, 5, 7];
function isEvenNum(item){
    return item % 2 === 0;
}

function filterEvenNums(array, func){
    var filteredArr = [];
    for(var i =0; i < array.length; i++){
        if(func(array[i])){
            filteredArr.push(array[i]);
        }
    }
    return filteredArr;
}

var filtered = filterEvenNums(arr, isEvenNum);
console.log(filtered);
