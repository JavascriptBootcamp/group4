bloodPressure = 70;
isNormal = false;
(bloodPressure >= 80 && bloodPressure <= 120)? isNormal = true: isNormal = false;
console.log(isNormal); // false
(bloodPressure < 80  || bloodPressure > 120)? isNormal = false: isNormal = true;
console.log(isNormal); // false
