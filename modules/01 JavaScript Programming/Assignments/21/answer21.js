function max(arr){

var max = 0;
for(var i=0;i<arr.length;i++){
    if(arr[i]>max){
        max = arr[i];
    }
}
return max;
}

console.log(max([12,34,56,1]));
console.log(max([-12,-34,0,-56,-1]));