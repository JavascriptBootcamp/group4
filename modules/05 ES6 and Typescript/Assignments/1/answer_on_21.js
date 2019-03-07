// destructuring example
const array = [12, 34, 56, 1, 18, 71, 5, 3];

let getMaxArrValue = (arr) => {
    let varsArr = [];
     
    // destructuring
    for (let i = 0; i < arr.length; i++) {
        varsArr.push("num" + (i+1));
    }
    varsArr = arr;

    let maxVal = varsArr[0];

    for (let i = 1; i < varsArr.length; ++i) {
        if (arr[i] > maxVal)  maxVal = arr[i];   
    }

    return `max value in [${array}] is ${maxVal}`;
}
console.log(getMaxArrValue(array));




let max = (arr) => {
    if (!Array.isArray(arr)) return 'ERROR: You must pass an array as a parameter'
    if (arr.length === 0) return 'ERROR: Array must include items in it';

    let maxVal = arr[0];


    for (let i = 1; i < arr.length; ++i) {
        if (arr[i] > maxVal)  maxVal = arr[i];   
    }

    return maxVal;
}

// console.log(max([12,34,56,1])); 
// console.log(max([-12,-34,0,-56,-1])); 
