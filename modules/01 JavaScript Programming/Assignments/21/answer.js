
// Gets highest value in the array
function max(arr) {

    if (!Array.isArray(arr)) return 'ERROR: You must pass an array as a parameter'
    if (arr.length === 0) return 'ERROR: Array must include items in it';

    var maxVal = arr[0];

    for (var i = 1; i < arr.length; ++i) {
        if (arr[i] > maxVal)  maxVal = arr[i];   
    }

    return maxVal;
}

console.log(max([12,34,56,1])); 
console.log(max([-12,-34,0,-56,-1])); 