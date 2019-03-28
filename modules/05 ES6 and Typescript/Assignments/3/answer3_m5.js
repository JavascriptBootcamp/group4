
const validateCreditCard = require('./validateCreditCard.js');

 class Account {
    constructor(number,owner) {
      this.balance = 0;
      this.number = number;
      this.owner = owner;
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

class BankAccount extends Account {

    constructor(number,owner) {
     super(number,owner);
    }

       
    
}

class CreditCardAccount extends Account {

    constructor(number,owner) {
        super(number,owner);
       }
    
       validateNumber(){
        return validateCreditCard(this.number);
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