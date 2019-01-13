function BankAccount(number, owner) {
    this.number = number ;
    this.owner = owner ;

    //withdraw amount of money from the account
    this.withdraw = function (amount) {
        if(this.number-amount<0){
            throw new Error("You dont have the right amount for the withdraw function")
        }
        else {
            this.number -= amount;
        }
    }

    //deposit amount of money to the account 
    this.deposit = function (amount) {
        this.number += amount;
    }

    //returns the current balance 
    this.getBalance = function () {
        return this.number;
    }
}

var acc1 = new BankAccount(0, "owner1");
var acc2 = new BankAccount(0, "owner2");
var acc3 = new BankAccount(0, "owner3");

acc1.deposit(1000);
acc2.deposit(1000);
acc3.deposit(1000);

try{
    acc1.withdraw(200);
    console.log(acc1.getBalance());
    acc2.withdraw(500);
    console.log(acc2.getBalance());
    acc3.withdraw(1500);
    console.log(acc3.getBalance());
}
catch (err) {
    console.log(err);
}
