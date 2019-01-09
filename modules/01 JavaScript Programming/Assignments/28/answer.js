

function BankAccount(number, owner){
    this.number = number;
    this.owner = owner;
    this.balance = 0;

    this.withdraw = function(amount){
       return this.balance -= amount;
    }

    this.deposit = function(amount){
       return this.balance += amount;
    }

    this.getBalance = function(){
       return this.balance;
    }
}

var bankAccount1 = new BankAccount('111' , 'owner1');
var bankAccount2 = new BankAccount('222' , 'owner2');
var bankAccount3 = new BankAccount('333' , 'owner3');

var BANK_ACCOUNTS = 3;

bankAccount1.deposit(1000);
bankAccount2.deposit(1000);
bankAccount3.deposit(1000);

bankAccount1.withdraw(200);
bankAccount2.withdraw(500);
bankAccount3.withdraw(1500);

console.log('\n');
console.log('Account number:', bankAccount1.number, ", Account's owner: ", bankAccount1.owner ,", Account's balance: ", bankAccount1.balance + 'NIS');
console.log('Account number:', bankAccount2.number, ", Account's owner: ", bankAccount2.owner , ", Account's balance: ", bankAccount2.balance + 'NIS');
console.log('Account number:', bankAccount3.number, ", Account's owner: ", bankAccount3.owner , ", Account's balance: ", bankAccount3.balance + 'NIS'); 
console.log('\n');
