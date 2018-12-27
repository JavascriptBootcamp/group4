var arr = ["blue","red","green","yellow"];
for(var i=0;i<arr.length;i++){
    console.log(`My ${i+1} choice is ${arr[i]}.`);
}

for(var i=0;i<arr.length;i++){
    switch(i+1){
        case 1: console.log(`My ${i+1}st choice is ${arr[i]}.`);break;
        case 2: console.log(`My ${i+1}nd choice is ${arr[i]}.`);break;
        case 3: console.log(`My ${i+1}rd choice is ${arr[i]}.`);break;
        default: console.log(`My ${i+1}th choice is ${arr[i]}.`);break;
    }
  
}