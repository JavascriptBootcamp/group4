function BankAccount(accountNumber, ownerAccount){

    var balance = 0;
    BankAccount.prototype.accountNumber = accountNumber;
    this.ownerAccount = ownerAccount;
    BankAccount.prototype.withdraw = function(amount){
        balance -= amount;
    }
    BankAccount.prototype.deposit = function(amount){
        balance += amount;
    }
    BankAccount.prototype.getBalance = function(){
        return balance;
    }
}

var bankAccount1 = new BankAccount(12345, "Moshe");
var bankAccount2 = new BankAccount(34567, "Eli");
var bankAccount3 = new BankAccount(54321, "Mor");

bankAccount1.deposit(1000);
bankAccount2.deposit(1000);
bankAccount3.deposit(1000);

bankAccount1.withdraw(200);
bankAccount2.withdraw(500);
bankAccount3.withdraw(1500);

console.log("Account Number: " + bankAccount1.accountNumber + "\n" + "Owner Account: " 
            + bankAccount1.ownerAccount + "\n" + "Current Balance: " + bankAccount1.getBalance() + " NIS");
console.log("Account Number: " + bankAccount2.accountNumber + "\n" + "Owner Account: " 
            + bankAccount2.ownerAccount + "\n" + "Current Balance: " + bankAccount2.getBalance() + " NIS");
console.log("Account Number: " + bankAccount3.accountNumber + "\n" + "Owner Account: " 
            + bankAccount3.ownerAccount + "\n" + "Current Balance: " + bankAccount3.getBalance() + " NIS"); 
