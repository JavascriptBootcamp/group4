Array.prototype.max = function () {
    var max = this[0];
    for (var i = 0; i < this.length; i++) {
        if (this[i] > max)
            max = this[i];
    }
    return max;
}

Array.prototype.min = function () {
    var min = this[0];
    for (var i = 1; i < this.length; i++) {
        if (this[i] < min)
            min = this[i];
    }
    return min;
}

var arr = [1, 22, 50, 7];
var minimum = arr.min();
var maximum = arr.max();
console.log("Minimum:", minimum, "Maximum:", maximum);