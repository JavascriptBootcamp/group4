var bloodPressure = 70;
var isNormal = false;
var isNormal = (bloodPressure > 80  && bloodPressure  < 120) ;
console.log(isNormal); // false
var isNormal = (bloodPressure < 80  || bloodPressure  > 120) ;
console.log(isNormal); // true
