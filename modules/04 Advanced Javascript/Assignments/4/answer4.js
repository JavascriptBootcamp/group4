Array.prototype.min=function arrayMin() {
    return this.reduce(function (p, v) {
      return ( p < v ? p : v );
    });
  }
  
  Array.prototype.max= function arrayMax() {
    return this.reduce(function (p, v) {
      return ( p > v ? p : v );
    });
  }
  
var arr = [1, 22, 50, 7];
var minimum = arr.min();
var maximum = arr.max();
console.log("Minimum:", minimum, "Maximum:", maximum);
