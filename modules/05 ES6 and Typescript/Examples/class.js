class Calculator {
    constructor(num1, num2){
        this.num1 = num1;
        this.num2 = num2;
    }

    sum(){
        return this.num1 - this.num2;
    }
}

let calc = new Calculator(2,3);
console.log(calc.sum());