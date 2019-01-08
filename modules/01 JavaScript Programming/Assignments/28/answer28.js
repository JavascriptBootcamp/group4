function BankAccount(number , owner){
    this.number = number;
    this.owner = owner;
    this.balance = 0 ;
    this.withdraw = function(amount){
       return this.balance-=amount;
    },
    this.deposit = function(amount){
       return this.balance+=amount;
    },
    this.getBalance = function(){
       return this.balance;
    }
}

var b1 = new BankAccount("123-123" , "gaby buchnik");
var b2 = new BankAccount("456-456" , "maly ninio");
var b3 = new BankAccount("789-789" , "yossi buchnik");

b1.deposit(1000);
b2.deposit(1000);
b3.deposit(1000);
b1.withdraw(200);
b2.withdraw(500);
b3.withdraw(1500);

console.log("Account number:",b1.number,"Account's owner",b1.owner ,"Balance",b1.balance);
console.log("Account number:",b2.number,"Account's owner",b2.owner ,"Balance",b2.balance);
console.log("Account number:",b3.number,"Account's owner",b3.owner ,"Balance",b3.balance);