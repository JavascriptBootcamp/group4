class Account{
    constructor(number,owner){
        this.number = number;
        this.owner = owner;

    }
    getBalance(){
        return this.balance;   
    }
}
class BankAccount extends Account{
    constructor(number,owner){
        super(number,owner);
        this.balance = 0;
        
    }
    withdraw(amount) {
        this.balance -= amount;
    }
    deposit(amount){
        this.balance += amount;
    }
}

class CreditCardAccount extends BankAccount{
    constructor(number,owner){
        super(number,owner);
        this.creditCardNumbersSum = 0;
        var creditCardWithNoDashes;
    
        creditCardWithNoDashes = this.number.toString().split("-");
        creditCardWithNoDashes = creditCardWithNoDashes.join(""); 
        this.number =  creditCardWithNoDashes.toString().split("").map(Number);

    }
    checkLength(creditCardWithNoDashes){
        return (creditCardWithNoDashes.length == 16);
    }
    checkAllItemsNumbers(creditCardNumbers) {
        var isAllItemsNumbers = creditCardNumbers.every(function(element){
            creditCardNumbersSum += element;
            return (element >=0 && element <=9);
        });
        return isAllItemsNumbers;
    }
    checkDigitsSum() {
        return (creditCardNumbersSum > 16);
    }
    checkIfAllDigitsSame(creditCardNumbers) {
        var isAllDigitsSame = creditCardNumbers.every(function(element){
            return element === creditCardNumbers[0];
        });
        return !isAllDigitsSame;
    }
    CheckLastDigitEven(creditCardNumbers) {
        return (creditCardNumbers[creditCardNumbers.length - 1] % 2 == 0)
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



