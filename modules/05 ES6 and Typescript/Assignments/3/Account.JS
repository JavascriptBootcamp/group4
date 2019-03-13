
class Account {
    constructor(number, owner) {
        this.number = number;
        this.owner = owner;
        this.balance = 0;
    }

    getBalance() {
        return this.balance;
    }

    withdraw(amount) {
        this.balance -= amount;
    }
    deposit(amount) {
        this.balance += amount;
    }
}

class BankAccount extends Account {
    constructor(number, owner) {
        super(number, owner);
    }
}


class CreditCardAccount extends Account {
    constructor(number, owner) {
        super(number, owner);
    }
}

function validateCreditCard(creditCard) {
    var creditCardNumbers;
    var creditCardNumbersSum = 0;
    var creditCardWithNoDashes;

    creditCardWithNoDashes = creditCard.split("-");
    creditCardWithNoDashes = creditCardWithNoDashes.join("");
    creditCardNumbers = creditCardWithNoDashes.split("").map(Number);

    function checkLength(creditCardWithNoDashes) {
        return (creditCardWithNoDashes.length == 16);
    }

    function checkAllItemsNumbers(creditCardNumbers) {
        var isAllItemsNumbers = creditCardNumbers.every(function (element) {
            creditCardNumbersSum += element;
            return (element >= 0 && element <= 9);
        });

        return isAllItemsNumbers;
    }

    function checkDigitsSum() {
        return (creditCardNumbersSum > 16);
    }

    function checkIfAllDigitsSame(creditCardNumbers) {
        var isAllDigitsSame = creditCardNumbers.every(function (element) {
            return element === creditCardNumbers[0];
        });
        return !isAllDigitsSame;
    }

    function CheckLastDigitEven(creditCardNumbers) {
        return (creditCardNumbers[creditCardNumbers.length - 1] % 2 == 0)
    }

    if (checkLength(creditCardNumbers)) {
        if (checkAllItemsNumbers(creditCardNumbers)) {
            if (checkDigitsSum()) {
                if (checkIfAllDigitsSame(creditCardNumbers)) {
                    if (CheckLastDigitEven(creditCardNumbers)) {
                        return { valid: true, number: creditCard }
                    }
                    else {
                        return { valid: false, error: "odd final number", number: creditCard }
                    }
                }
                else {
                    return { valid: false, error: "only one type of number", number: creditCard }
                }
            }
            else {
                return { valid: false, error: "sum less than 16", number: creditCard }
            }
        }
        else {
            return { valid: false, error: "invalid characters", number: creditCard }
        }
    }
    else {
        return { valid: false, error: "Credit Card Length Must Be 16 Digits", number: creditCard }
    }
}



const bankOfAmericaAccount = new BankAccount(123456789, "John Doe");
bankOfAmericaAccount.deposit(5000);
bankOfAmericaAccount.withdraw(2000);
console.log(`bank Of America Account :${bankOfAmericaAccount.getBalance()} $`);

const isracardAccount = new CreditCardAccount(4580123412341234, "John Doe");
const isracardValid = validateCreditCard("4580123412341234");
if (isracardValid.valid != true)
    console.log(`isracardAccount number invalid: ${visaValid.error}`);
else {
    isracardAccount.deposit(10000);
    isracardAccount.withdraw(3000);
    console.log(`isracardAccount :${isracardAccount.getBalance()} $`);
}

const visaAccount = new CreditCardAccount(4580123412341231, "John Doe");
const visaValid = validateCreditCard("4580123412341231");
if (visaValid.valid != true)
    console.log(`visaAccount number invalid: ${visaValid.error}`);
else {
    visaAccount.deposit(10000);
    visaAccount.withdraw(3000);
    console.log(`visaAccount :${visaAccount.getBalance()} $`);
}




