// convert group4/Modules/01 JavaScript Programming/Assignments/28 to ES6

class Account {
    constructor(accountNumber, ownerAccount){
        this.balance = 0;
        this.accountNumber = accountNumber;
        this.ownerAccount = ownerAccount;
    }

    getBalance(){
        return this.balance;
    }
}

class BankAccount extends Account {
    constructor(accountNumber, ownerAccount){
        super(accountNumber, ownerAccount);
    }

    withdraw(amount){
        this.balance -= amount;
    }
    deposit(amount){
        this.balance += amount;
    }
}

class CreditCardAccount extends BankAccount {
    constructor(accountNumber, ownerAccount){
        super(accountNumber, ownerAccount);
    }

    validateCreditCard(creditCard) {
        let creditCardNumbers;
        let creditCardNumbersSum = 0;
        let creditCardWithNoDashes;
    
        creditCardWithNoDashes = creditCard.split("-");
        creditCardWithNoDashes = creditCardWithNoDashes.join(""); 
        creditCardNumbers =  creditCardWithNoDashes.split("").map(Number);
    
        function checkLength(creditCardWithNoDashes) {
            return (creditCardWithNoDashes.length == 16);
        }
    
        function checkAllItemsNumbers(creditCardNumbers) {
            var isAllItemsNumbers = creditCardNumbers.every(function(element){
                creditCardNumbersSum += element;
                return (element >=0 && element <=9);
            });
    
            return isAllItemsNumbers;
        }
    
        function checkDigitsSum() {
            return (creditCardNumbersSum > 16);
        }
    
        function checkIfAllDigitsSame(creditCardNumbers) {
            var isAllDigitsSame = creditCardNumbers.every(function(element){
                return element === creditCardNumbers[0];
            });
            return !isAllDigitsSame;
        }
    
        function CheckLastDigitEven(creditCardNumbers) {
            return (creditCardNumbers[creditCardNumbers.length - 1] % 2 == 0)
        }
    
        if (checkLength(creditCardNumbers)){
            if (checkAllItemsNumbers(creditCardNumbers)){
                if (checkDigitsSum()){
                    if (checkIfAllDigitsSame(creditCardNumbers)){
                        if (CheckLastDigitEven(creditCardNumbers)){
                            return {valid : true, number : creditCard}
                        }
                        else {
                            return {valid : false, error : "odd final number", number : creditCard}
                        }
                    }
                    else {
                        return {valid : false, error : "only one type of number", number : creditCard}
                    }
                }
                else {
                    return {valid : false, error : "sum less than 16", number : creditCard}
                }
            }
            else {
                return {valid : false, error : "invalid characters", number : creditCard}
            }
        }
        else {
            return {valid : false, error : "Credit Card Length Must Be 16 Digits", number : creditCard}
        }
    }
}


const bankOfAmericaAccount = new BankAccount(123456789, "John Doe");
bankOfAmericaAccount.deposit(5000);
bankOfAmericaAccount.withdraw(2000);
const visaAccount = new CreditCardAccount(4580123412341234, "John Doe");
visaAccount.deposit(10000);
visaAccount.withdraw(3000);


console.log(bankOfAmericaAccount.getBalance()); // 3000
console.log(visaAccount.getBalance()); // 7000