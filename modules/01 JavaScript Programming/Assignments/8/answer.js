var bloodPressure = 70;
var isNormal = false;
isNormal = (bloodPressure >= 80 && bloodPressure <= 120) ? true:false;
console.log(isNormal);
isNormal = (bloodPressure < 80 || bloodPressure > 120) ? true:false;
console.log(isNormal);
