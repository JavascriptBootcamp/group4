// Direct Object
// module.exports = {
//     sum: function(num1, num2) {
//         return num1+num2;
//     }
// }

// Object Variable
// const calc = {
//     sum: function (num1, num2) {
//         return num1 + num2;
//     }
// }
// module.exports = calc;

// Class
// class Calc {
//     constructor(num1, num2) {
//         this.num1 = num1;
//         this.num2 = num2;
//     }
//     sum(num1, num2) {
//         return num1 + num2;
//     }
//     sub(num1, num2) {
//         return num1 - num2;
//     }
//     multiply(num1, num2) {
//         return num1 * num2;
//     }
//     divide(num1, num2) {
//         return num1 / num2;
//     }
// }
// module.exports = Calc;

// Object of Calsses
class Calc {
    constructor(num1, num2) {
        if (isNaN(num1) || isNaN(num2)) this.error = "Wrong input";
        this.num1 = num1;
        this.num2 = num2;
    }
    sum() {
        return this.error || this.num1 + this.num2;
    }
    sub() {
        return this.num1 - this.num2;
    }
    multiply() {
        return this.num1 * this.num2;
    }
    divide() {
        return this.num1 / this.num2;
    }
}

class Logger {
    log(str) {
        console.log(str);
    }
}
module.exports = { Calc, Logger };