let orgarr = [-12,-34,0,-56,-1];
const max = (...arr)=>{
    let maxValue = arr[0];
    for(let i of arr){
        i>maxValue?maxValue=i:{};
    }
    return maxValue;
}
console.log(max(...orgarr));