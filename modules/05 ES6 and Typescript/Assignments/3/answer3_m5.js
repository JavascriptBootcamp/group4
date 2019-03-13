/* var BankAccount = function(number , owner){
    this.number = number;
    this.owner = owner;
    var balance = 0 ;
    
    this.withdraw = function(amount){
    
        balance -= amount; 
    }
    
    this.deposit = function(amount){
        
        balance += amount; 
    }
    
    
    this.getBalance = function(){
        console.log(`number : ${number} name: ${number} balance : ${balance}`);
    }
    
    }
    
    var bankAccount1 = new BankAccount("111","avi");
    var bankAccount2 = new BankAccount("222","moshe");
    var bankAccount3 = new BankAccount("333","avi");
    
    bankAccount1.deposit(1000);
    bankAccount2.deposit(1000);
    bankAccount3.deposit(1000);
    
    bankAccount1.withdraw(200);
    bankAccount2.withdraw(500);
    bankAccount3.withdraw(1500);
    
    bankAccount1.getBalance();
    bankAccount2.getBalance();
    bankAccount3.getBalance();
    
    
 */

 
 /* class BankAccount {
     
    constructor(number,owner) {
     this.number = number;
     this.owner = owner;
     this.amount = 0;
    }

    getBalance(){
       return this.amount;
    }

    withdraw(amount){
      this.amount -= amount;
    }

    deposit(amount) {
        this.amount =+ amount;
    }
 } */

 class Account {
     
    constructor(number,owner) {
     this.number = number;
     this.owner = owner;
    }

    getBalance(){
       return this.amount;
    }

 }

class BankAccount extends Account {

    constructor(number,owner) {
     super(number,owner);
    }
}
 
