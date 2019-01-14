function maxValueInArray(arr) {
    var max = arr[0];
    arr.forEach(function(item) {
        if (item > max){
            max = item;
        }
    })
    return max;
}

console.log(maxValueInArray([0, 20, 30, 40, 10])); 


