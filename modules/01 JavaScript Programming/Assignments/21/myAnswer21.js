function maxValue(arr){
    var max=arr[0];
for(var i=0;i<arr.length;i++){
 if (arr[i]>max){
     max=arr[i];
 }
}
console.log(max);
}


maxValue([0,-1,-2]);
