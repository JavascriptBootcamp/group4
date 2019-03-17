class Account{
    constructor(accountNumber, ownerAccount){
        this.balance = 0;
        this.accountNumber = accountNumber;
        this.ownerAccount = ownerAccount;
    }
    getBalance(){
        return this.balance;
    }
    withdraw(amount){
        this.balance -= amount;
    }
    deposit(amount){
        this.balance += amount;
    }
}


class BankAccount extends Account{
    constructor(accountNumber, ownerAccount,balance){
        super(accountNumber, ownerAccount,balance);
    }
}

class CreditCardAccount extends Account{
    constructor(creditCard, accountNumber, ownerAccount, balance){
        super(accountNumber, ownerAccount, balance);
        this.creditCard = creditCard.toString(10);
        this.creditCardWithNoDashes = this.creditCard.split("-");
        this.creditCardWithNoDashes = this.creditCardWithNoDashes.join(""); 
        this.creditCardNumbers =  this.creditCardWithNoDashes.split("").map(Number);
        this.creditCardNumbersSum = 0;
    }
    checkLength() {
        return (this.creditCardWithNoDashes.length == 16);
    }
    checkAllItemsNumbers() {
        let isAllItemsNumbers = this.creditCardNumbers.every(function(element){
            this.creditCardNumbersSum += element;
            return (element >=0 && element <=9);
        });
        return isAllItemsNumbers;
    }
    checkDigitsSum() {
        return (this.creditCardNumbersSum > 16);
    }
    checkIfAllDigitsSame() {
        let isAllDigitsSame = this.creditCardNumbers.every(function(element){
            return element === this.creditCardNumbers[0];
        });
        return !isAllDigitsSame;
    }
    CheckLastDigitEven() {
        return (this.creditCardNumbers[this.creditCardNumbers.length - 1] % 2 == 0)
    }
    validateNumber(){
        if (checkLength()){
            if (checkAllItemsNumbers(this.creditCardNumbers)){
                if (checkDigitsSum()){
                    if (checkIfAllDigitsSame(this.creditCardNumbers)){
                        if (CheckLastDigitEven(this.creditCardNumbers)){
                            return {valid : true, number : this.creditCard}
                        }
                        else {
                            return {valid : false, error : "odd final number", number : this.creditCard}
                        }
                    }
                    else {
                        return {valid : false, error : "only one type of number", number : this.creditCard}
                    }
                }
                else {
                    return {valid : false, error : "sum less than 16", number : this.creditCard}
                }
            }
            else {
                return {valid : false, error : "invalid characters", number : this.creditCard}
            }
        }
        else {
            return {valid : false, error : "Credit Card Length Must Be 16 Digits", number : this.creditCard}
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




// function BankAccount(accountNumber, ownerAccount){

//     var balance = 0;
//     this.accountNumber = accountNumber;
//     this.ownerAccount = ownerAccount;
//     this.withdraw = function(amount){
//         balance -= amount;
//     }
//     this.deposit = function(amount){
//         balance += amount;
//     }
//     this.getBalance = function(){
//         return balance;
//     }
// }

// var bankAccount1 = new BankAccount(12345, "Moshe");
// var bankAccount2 = new BankAccount(34567, "Eli");
// var bankAccount3 = new BankAccount(54321, "Mor");

// bankAccount1.deposit(1000);
// bankAccount2.deposit(1000);
// bankAccount3.deposit(1000);

// bankAccount1.withdraw(200);
// bankAccount2.withdraw(500);
// bankAccount3.withdraw(1500);

// console.log("Account Number: " + bankAccount1.accountNumber + "\n" + "Owner Account: " 
//             + bankAccount1.ownerAccount + "\n" + "Current Balance: " + bankAccount1.getBalance() + " NIS");
// console.log("Account Number: " + bankAccount2.accountNumber + "\n" + "Owner Account: " 
//             + bankAccount2.ownerAccount + "\n" + "Current Balance: " + bankAccount2.getBalance() + " NIS");
// console.log("Account Number: " + bankAccount3.accountNumber + "\n" + "Owner Account: " 
//             + bankAccount3.ownerAccount + "\n" + "Current Balance: " + bankAccount3.getBalance() + " NIS"); 