function findMax(arr) {
    
    //return Math.max.apply(null, arr);
    
    return arr.reduce(function (max, value) {
        return max > value ? max : value;
    });
}

console.log(findMax([12, 34, 56, 100]));