//Answer 28
function BankAccount(number,owner){
    this.number = number;
    this.owner = owner;
    var balance = 0; // private ?
 

    this.withdraw = function(amount){
        balance -= amount;
    }
    this.deposit = function(amount){
        balance += amount;
    }
    this.getBalance = function(){
         return balance;
    }

}

var acc1 = new BankAccount(111,"David");
var acc2 = new BankAccount(222,"Liron");
var acc3 = new BankAccount(333,"Ofir");

acc1.deposit(1000);
acc2.deposit(1000);
acc3.deposit(1000);

acc1.withdraw(200);
acc2.withdraw(500);
acc3.withdraw(1500);

console.log("Account number: " + acc1.number + "," + " Name: " + acc1.owner + "," + " Balance: " + acc1.getBalance() + "₪");
console.log("");
console.log("Account number: " + acc2.number + "," + " Name: " + acc2.owner + "," + " Balance: " + acc2.getBalance() + "₪");
console.log("");
console.log("Account number: " + acc3.number + "," + " Name: " + acc3.owner + "," + " Balance: " + acc3.getBalance() + "₪");