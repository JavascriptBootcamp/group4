Array.prototype.min = function () {
    var min = this[0];
    for (let i = 0; i <= this.length/2; i++) {
        rightIndex = this.length-1-i;
        min = (min > this[i]) ? this[i] : min;
        min = (min > this[rightIndex]) ? this[rightIndex] : min;
    }
    return min;
}  

Array.prototype.max = function () {
    var max = this[0];
    for (let i = 0; i <= this.length/2; i++) { 
        rightIndex = this.length-1-i;
        max = (max < this[i]) ? this[i] : max;
        max = (max < this[rightIndex]) ? this[rightIndex] : max;
    }
    return max;
}  



var arr = [1, 22, 50, 7];
var minimum = arr.min();
var maximum = arr.max();
console.log("Minimum:", minimum, "Maximum:", maximum);