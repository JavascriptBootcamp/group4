let max = (...args)=>{

    let maxValue = args[0];
    for(let number of args){
        if(number > maxValue){
            maxValue = number;
        }
    }
    return maxValue;
};

let [n1,n2,n3,n4,n5] = [-12,-34,0,-56,-1];
let arr = [n1,n2,n3,n4,n5];

console.log(max(arr[0],arr[1],arr[2],arr[3],arr[4]));
