function max(arr){

    var maxValue;
    for(var i=0; i< arr.length; i++){
        if(i===0){
            maxValue = arr[0];
        }else{
            if(arr[i] > maxValue){
                maxValue = arr[i];
            }
        }
    }
    return maxValue;
}

console.log(max([-12,-34,0,-56,-1]));
