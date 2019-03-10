Array.prototype.min = function () {
    var minValue = this[0];
    this.forEach(value => {
        if (value < minValue) {
            minValue = value;
        }
    });
    return minValue;
}

Array.prototype.max = function () {
    var maxValue = this[0];
    this.forEach(value => {
        if (value > maxValue) {
            maxValue = value;
        }
    });
    return maxValue;
}

var arr = [1, 22, 50, 7];
var minimum = arr.min();
var maximum = arr.max();
console.log("Minimum:", minimum, "Maximum:", maximum);