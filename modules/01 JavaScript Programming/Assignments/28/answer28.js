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

var bankAccount1 = new BankAccount(1, 'Mariya');
var bankAccount2 = new BankAccount(2, 'John');
var bankAccount3 = new BankAccount(3, 'Mike');

var accountsArray = [bankAccount1, bankAccount2, bankAccount3];

accountsArray.forEach(element => {
    element.deposite(1000);
});

bankAccount1.withdraw(200);
bankAccount2.withdraw(500);
bankAccount3.withdraw(1500);

accountsArray.forEach(element => {
    console.log("Account number:", element.number, "Account owner:", element.owner);
    console.log("Balance:", element.getBalance());
});

