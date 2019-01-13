// finds the highest value in an array
function  highestValue(arr) {
    var max = arr[0];
    //running on all the array in n/2 steps
    for (let i = 0; i < arr.length/2; i++) {
        var element1 = arr[i];
        var element2 = arr[arr.length-i-1];
        //check the max values of each element - save the highest in the max var
        max = max < element1 ? element1 : max;
        max = max < element2 ? element2 : max; 
    }
    return max;
}

//testing the function
console.log(highestValue([12, 34, 56, 1]));
console.log(highestValue([-12, -34, 0, -56, -1]));