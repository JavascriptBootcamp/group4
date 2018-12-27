var arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
var i =0;
while(arr[i]<=50){
    if(arr[i]%7===0){
        console.log("boom");
       }
       i++;
}

i=0;
while(arr[i]<=100){

if(arr[i]%5===0 && arr[i]%3===0) {
console.log("fizzbuzz because it is" + arr[i]) 
}
else if(arr[i]%3===0){
    console.log("fizz because it is" + arr[i])   
}
else if(arr[i]%5===0) {
    console.log("buzz because it is" + arr[i]) 
}
i++;
}