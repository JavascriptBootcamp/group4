class Account {
    constructor(number, owner) {
        this.number = number;
        this.owner = owner;
    }
    getBalance() {
        return this.balance;
    }
}
class CreditCardAccount extends Account {
    constructor() {
        super();
        this.balance = 0;
    }
    withdraw(amount) {
        return this.balance -= amount;
    }
    deposit(amount) {
        return this.balance += amount;
    }
    validateCreditCard() {
        //check duplicates numbers in the array and sum between numbers 
        this.CalcNumbersAndCheckDuplicates();
        lastIndex = arrCreditCardNumber.length - 1;
        lastIndex = arrCreditCardNumber[lastIndex];
        if (NumOfDigitsWithoutDuplicates >= 2 && !isNaN(checkNumber) && arrCreditCardNumber.length === 16 && lastIndex % 2 === 0 && sum > 16 ? true : false) {
            let creditObj = {
                valid: true,
                number: checkNumber,
            }
            return creditObj;
        }
        else {
            let creditObj = {
                valid: false,
                number: this.checkNumber,
                error: this.checkError()
            }
            return creditObj;
        }
    }
    CalcNumbersAndCheckDuplicates() {
        checkNumber = arrCreditCardNumber.join('');
        arrCreditCardNumber = arrCreditCardNumber.join('').split("");

        arrCreditCardNumber.forEach( (item, index) => {
            sum += Number(item);
            arrWithoutDuplicates[item]++;
        });

        for (let i = 0; i < arrWithoutDuplicates.length; i++) {
            if (arrWithoutDuplicates[i] > 0) {
                NumOfDigitsWithoutDuplicates++;
            }
        }
    }

    checkError() {
        if (NumOfDigitsWithoutDuplicates < 2) {
            errorMassage = "You must have at least two different digits represented";
        }
        else if (isNaN(checkNumber)) {
            errorMassage = "all of them must be numbers";
        }
        else if (arrCreditCardNumber.length !== 16) {
            errorMassage = "Number must be 16 digits";
        }
        else if (lastIndex % 2 !== 0) {
            errorMassage = "The final digit must be even";
        }
        else if (sum <= 16) {
            errorMassage = "The sum of all the digits must be greater than 16";
        }
        else {
            errorMassage = "some other error";
        }
        return errorMassage;
    }
}
class BankAccount extends Account {
    constructor() {
        super();
        this.balance = 0;
    }
    withdraw(amount) {
        return this.balance -= amount;
    }
    deposit(amount) {
        return this.balance += amount;
    }
}



let CreditCardNumber = "4580123412341234";
let arrCreditCardNumber = CreditCardNumber.toString().split("-");
let checkNumber;
let arrWithoutDuplicates = new Array(10).fill(0);
let NumOfDigitsWithoutDuplicates = 0;
let lastIndex;
let sum = 0;
let errorMassage = "";

const bankOfAmericaAccount = new BankAccount(123456789, "John Doe");
bankOfAmericaAccount.deposit(5000);
bankOfAmericaAccount.withdraw(2000);
const visaAccount = new CreditCardAccount(arrCreditCardNumber, "John Doe");
// console.log(visaAccount.validateCreditCard());
visaAccount.deposit(10000);
visaAccount.withdraw(3000);


console.log(bankOfAmericaAccount.getBalance()); // 3000
console.log(visaAccount.getBalance()); // 7000