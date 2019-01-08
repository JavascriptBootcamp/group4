function BankAccount(number, owner) {
    this.number = number;
    this.owner = owner;
    var balance = 0;

    this.withdraw = function (amount) {
        return balance -= amount;
    }
    this.deposit = function (amount) {
        return balance += amount;
    }
    this.getBalance = function () {
        return balance;
    }
    this.toString = function () {
        return "Number: " + this.number + "\nName: " + this.owner + "\nBalance: " + balance;
    }
}

var bank1 = new BankAccount(1111, "moshiko");
var bank2 = new BankAccount(2222, "moshe");
var bank3 = new BankAccount(3333, "shai");

bank1.deposit(1000);
bank2.deposit(1000);
bank3.deposit(1000);

bank1.withdraw(200);
bank2.withdraw(500);
bank3.withdraw(1500);

console.log(bank1.toString());
console.log(bank2.toString());
console.log(bank3.toString());
