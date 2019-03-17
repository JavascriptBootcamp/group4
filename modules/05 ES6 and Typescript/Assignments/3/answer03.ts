class Account {
    number: number;
    owner: string;
    balance: number;

    constructor(number: number, owner: string) {
        this.number = number;
        this.owner = owner;
        this.balance = 0;
    }

    getBalance(): number {
        return this.balance;
    }
}

class BankAccount extends Account {
    constructor(number: number, owner: string) {
        super(number, owner);
    }

    withdraw(amount) {
        this.balance -= amount;
    }

    deposit(amount) {
        this.balance += amount;
    }
}

class CreditCardAccount extends Account {
    constructor(number: number, owner: string) {
        super(number, owner);
    }

    withdraw(amount) {
        this.balance -= amount;
    }

    deposit(amount) {
        this.balance += amount;
    }

}

let cardObj: { isValid: boolean, number: any, error: string } = {
    isValid: true,
    number: 0,
    error: ""
}

function validateCreditCard(card: any): boolean {

    cardObj.number = card;
    let cardString: string = String(card);
    cardString = cardString.replace(/-/g, ''); // regex: /-/g means replace all "-" g-global with "" (nothing).
    let cardNumber: number = Number(cardString);

    function isValidNumber(): boolean {

        if (isNaN(cardNumber)) {
            cardObj.isValid = false;
            cardObj.error = "invalid_characters";
        }
        else {
            cardObj.isValid = true;
        }

        return cardObj.isValid;
    }

    function isValidLength(): boolean {

        if (cardString.length !== 16) {
            cardObj.isValid = false;
            cardObj.error = "wrong_length";
        }
        else {
            cardObj.isValid = true;
        }

        return cardObj.isValid;
    }

    function isDifferentDigits(): boolean {

        let isAllSameDigits = true;

        for (let i: number = 1; i < cardString.length; i++) {

            if (cardString[0] !== cardString[i]) {
                isAllSameDigits = false;
                break;
            }
        }

        if (isAllSameDigits) {
            cardObj.isValid = false;
            cardObj.error = "card_number_digits_is_same";
        }
        else {
            cardObj.isValid = true;
        }

        return cardObj.isValid;
    }

    function isCheckFinalDigit(): boolean {
        if (cardNumber % 2 !== 0) {
            cardObj.isValid = false;
            cardObj.error = "final_digit_must_be_even";
        }
        else {
            cardObj.isValid = true;
        }

        return cardObj.isValid;
    }

    function isDigitsSum(): boolean {

        let sum = 0;

        while (cardNumber) {
            sum += (cardNumber % 10);
            cardNumber = Math.floor(cardNumber / 10);
        }

        if (sum < 16) {
            cardObj.isValid = false;
            cardObj.error = "The_sum_of_all_digits_is_less_then_16"
        }
        else {
            cardObj.isValid = true;
        }

        return cardObj.isValid;
    }

    if (!isValidNumber()) {
        return cardObj.isValid;
    }
    if (!isValidLength()) {
        return cardObj.isValid;
    }
    if (!isDifferentDigits()) {
        return cardObj.isValid;
    }
    if (!isCheckFinalDigit()) {
        return cardObj.isValid;
    }
    if (!isDigitsSum()) {
        return cardObj.isValid;
    }

    return cardObj.isValid;
}

const bankOfAmericaAccount = new BankAccount(123456789, "John Doe");
bankOfAmericaAccount.deposit(5000);
bankOfAmericaAccount.withdraw(2000);
const visaAccount = new CreditCardAccount(4580123412341234, "John Doe");

console.log(bankOfAmericaAccount.getBalance()); // 3000

if (validateCreditCard(visaAccount.number)) {
    visaAccount.deposit(10000);
    visaAccount.withdraw(3000);
    console.log(visaAccount.getBalance()); // 7000
}
else{
    console.log(`visaAccount has ${cardObj.error}`);
}

