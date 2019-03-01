Array.prototype.min =function () {
    return Math.min(...this);
}
Array.prototype.max =function () {
    return Math.max(...this);
}

var arr = [1, 22, 50, 7];
var minimum = arr.min();
var maximum = arr.max();
console.log("Minimum:", minimum, "Maximum:", maximum);
