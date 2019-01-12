
// findes the highest value in an array
function max(arr) {
	maxVal = arr[0]; // set the first value as the maximum value
	arr.forEach(function(num){ // for any value of the array
		if (num > maxVal) { // if its higher then tha maximum  
			maxVal = num; // set him as the maximum value
		}
	});
	return maxVal;
}

console.log(max([12,34,56,1])); // output 56
console.log(max([-12,-34,0,-56,-1])); // output 0
