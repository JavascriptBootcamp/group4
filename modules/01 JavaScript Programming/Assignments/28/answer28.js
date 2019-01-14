function BankAccount(number, owner) {
    this.number = number;
    this.owner = owner;
    var balance = 0;

    this.withdraw = function (amount) {
        balance -= amount;
    }

    this.deposite = function (amount) {
        balance += amount;
    }

    this.getBalance = function () {
        return balance;
    }
};

var acc1 = new BankAccount(1001, 'Amir');
var acc2 = new BankAccount(1002, 'Sami');
var acc3 = new BankAccount(1003, 'Yosi');
var accountsArr = [acc1, acc2, acc3];

accountsArr.forEach(function(item) {
    item.deposite(1000);
});

acc1.withdraw(200);
acc2.withdraw(500);
acc3.withdraw(1500);

accountsArr.forEach(function(item) {
    console.log("Account Number:", item.number, " | Account Owner:", item.owner, " | Balance:", item.getBalance());
    console.log();
});
