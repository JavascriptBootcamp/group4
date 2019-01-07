function max(arr){
    //option 1 
    //return Math.max(...arr);

    //option 2 
    var max = arr[0];
    arr.forEach(function(item,index){
        if(index === 0){
            return;
        }
        else{
            if (item > max){
                max = item;
            }
        }
    });
    return max;
}

console.log(max([12,34,56,1]));
console.log(max([-12,-34,0,-56,-1]));