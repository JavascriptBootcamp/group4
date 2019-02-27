function BankAccount(accountNumber, ownerAccount) {
    var balance = 0;
    this.accountNumber = accountNumber;
    this.ownerAccount = ownerAccount;

    this.setBalance = function (value) { balance = value; }
    this.getBalance = function () { return balance; }
}
BankAccount.prototype.withdraw = function (amount) {
    this.setBalance(this.getBalance() - amount);
}
BankAccount.prototype.deposit = function (amount) {
    this.setBalance(this.getBalance() + amount);
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