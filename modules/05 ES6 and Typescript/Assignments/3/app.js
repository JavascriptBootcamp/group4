var application;
(function (application) {
    class Application {
        constructor() {
            const bankOfAmericaAccount = new BankAccount(123456789, "John Doe");
            bankOfAmericaAccount.deposit(5000);
            bankOfAmericaAccount.withdraw(2000);
            console.log(bankOfAmericaAccount.getBalance());
            const visaAccount = new CreditCardAccount(4580123412341234, "John Doe");
            visaAccount.deposit(10000);
            visaAccount.withdraw(3000);
            console.log(visaAccount.getBalance());
        }
    }
    application.Application = Application;
})(application || (application = {}));
window.addEventListener('DOMContentLoaded', () => {
    new application.Application();
});
class Account {
    constructor(number, owner) {
        this.number = number;
        this.owner = owner;
        this.balance = 0;
    }
    getBalance() {
        return this.balance;
    }
}
class BankAccount extends Account {
    constructor(number, owner) {
        super(123, "Some name");
        this.balance = 0;
    }
    withdraw(amount) {
        return this.balance -= amount;
    }
    deposit(amount) {
        return this.balance += amount;
    }
    getBankAccountNumber() {
        return this.number;
    }
    getBankAccountOwner() {
        return this.owner;
    }
}
class CreditCardAccount extends Account {
    constructor(number, owner) {
        super(123, "Some name");
        this.balance = 0;
    }
    withdraw(amount) {
        return this.balance -= amount;
    }
    deposit(amount) {
        return this.balance += amount;
    }
    eachCharIsDigit(num) {
        let numericDigit = 0;
        for (let i = 0; i < num.length; i++) {
            numericDigit = Number(num[i]);
            if (isNaN(numericDigit))
                return false;
        }
        return true;
    }
    allDigitsAreSame(num) {
        let numericDigit;
        let firstDigit = Number(num.substring(0, 1));
        let countOfFirstDigit = 1;
        for (let i = 1; i < num.length; i++) {
            numericDigit = Number(num[i]);
            if (numericDigit === firstDigit)
                countOfFirstDigit++;
        }
        if (countOfFirstDigit === num.length)
            return true;
        return false;
    }
    isFinalDigitEven(num) {
        let finalDigit = Number(num.substring(num.length - 1, num.length));
        if (finalDigit % 2 === 0)
            return true;
        return false;
    }
    correctDigitsSum(num) {
        const DIGITS_MINIMAL_SUM = 17;
        let numDigitsSum = 0;
        for (let i = 0; i < num.length; i++) {
            numDigitsSum += Number(num[i]);
        }
        if (numDigitsSum >= DIGITS_MINIMAL_SUM)
            return true;
        return false;
    }
    validateCreditCard(cardNum) {
        const DIGITS_MINIMAL_SUM = 17;
        let resObj = {};
        let errorMessage = '';
        if (cardNum.length !== 16) {
            errorMessage += 'The card number must contain 16 digits';
        }
        if (!this.eachCharIsDigit(cardNum)) {
            errorMessage += '    Each char of the card number must be a digit';
        }
        if (this.allDigitsAreSame(cardNum)) {
            errorMessage += '    The card number must contain at least two different digits';
        }
        if (!this.isFinalDigitEven(cardNum)) {
            errorMessage += '     The final digit of the card number must be even';
        }
        if (!this.correctDigitsSum(cardNum)) {
            errorMessage += `     The sum of card num digits must be greater than ${DIGITS_MINIMAL_SUM - 1}`;
        }
        if (errorMessage !== '') {
            resObj = {
                valid: false,
                number: cardNum,
                error: errorMessage
            };
            return resObj;
        }
        resObj = {
            valid: true,
            number: cardNum
        };
        return resObj;
    }
}
