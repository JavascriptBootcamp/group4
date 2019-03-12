Array.prototype.min = function () {
    return this.reduce(function (a, b) {
        return Math.min(a, b);
    });
}

Array.prototype.max = function () {
    return this.reduce(function (a, b) {
        return Math.max(a, b);
    });
}


var arr = [1, 22, 50, 7];
var minimum = arr.min();
var maximum = arr.max();
console.log("Minimum:", minimum, "Maximum:", maximum);

//return-> Minimum: 1 Maximum: 50