class Account {
    constructor(number, owner) {
        this._balance = 0;
        this.number = number;
        this.owner = owner;
    }

    get balance() {
        return this._balance;
    }
    set balance(value) {
        this._balance = value;
    }
}

class BankAccount extends Account {
    constructor(number, owner) {
        super(number, owner);
    }

    withdraw(value) {
        this.balance -= value;
    }
    deposit(value) {
        this.balance += value;
    }
}

class CreditCardAccount extends BankAccount {
    constructor(number, owner) {
        super(number, owner);
    }
    validateCreditCard(creditCardNumber) {
        const arrNumberC = creditCardNumber.split("").filter((value) => value !== "-");
        const strnumberC = arrNumberC.join("");

        if (arrNumberC.length != 16)
            return { valid: false, number: creditCardNumber, error: "Worng Length" };

        else if (isNaN(Number(strnumberC)))
            return { valid: false, number: creditCardNumber, error: "Card number contains letters" };

        else if (arrNumberC.every((value, i, arr) => value === arr[0]))
            return { valid: false, number: creditCardNumber, error: "There must be at least two different numbers" };

        else if (Number(strnumberC.charAt(strnumberC.length - 1)) % 2 === 1)
            return { valid: false, number: creditCardNumber, error: "Final digit is odd" };

        else if ((arrNumberC.reduce((total, value) => Number(total) + Number(value))) <= 16)
            return { valid: false, number: creditCardNumber, error: "The sum of all the digits must be greater than 16" };

        else
            return { valid: true, number: creditCardNumber };
    }
}


const bankOfAmericaAccount = new BankAccount(123456789, "John Doe");
bankOfAmericaAccount.deposit(5000);
bankOfAmericaAccount.withdraw(2000);
const visaAccount = new CreditCardAccount(4580123412341234, "John Doe");
visaAccount.deposit(10000);
visaAccount.withdraw(3000);


console.log(bankOfAmericaAccount.balance); // 3000
console.log(visaAccount.balance); // 7000

