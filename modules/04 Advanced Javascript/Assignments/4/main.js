Array.prototype.min = function () {
    var minValue;
    for (var i = 0; i < this.length; i++) {
        if (i === 0) {
            minValue = this[0];
        } else {
            if (this[i] < minValue) {
                minValue = this[i];
            }
        }
    }
    return minValue;
}
Array.prototype.max = function () {
    var maxValue;
    for (var i = 0; i < this.length; i++) {
        if (i === 0) {
            maxValue = this[0];
        } else {
            if (this[i] > maxValue) {
                maxValue = this[i];
            }
        }
    }
    return maxValue;
}

var arr = [1, 22, 50, 7];
var minimum = arr.min();
var maximum = arr.max();
console.log("Minimum:", minimum, "Maximum:", maximum);
var arr1 = [20, -39, -80, 13];
var minimum1 = arr1.min();
var maximum1 = arr1.max();
console.log("Minimum:", minimum1, "Maximum:", maximum1);
