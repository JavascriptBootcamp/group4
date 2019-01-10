function BankAccount(number,owner){
    this.number = number;
    this.owner = owner;
    this.balance = 0;
    this.withdraw = function(amount){this.balance -= amount};
    this.deposit = function(amount){this.balance += amount};
    this.getBalance = function(){return this.balance}
}

BankAccount1=new BankAccount(111,"Ofek");
BankAccount2=new BankAccount(222,"Moshe");
BankAccount3=new BankAccount(333,"Bibi");

BankAccount1.deposit(1000);
BankAccount2.deposit(1000);
BankAccount3.deposit(1000);

BankAccount1.withdraw(200);
BankAccount2.withdraw(500);
BankAccount3.withdraw(1500);

console.log(`Account's number is: ${BankAccount1.number}\nAccount's owner is: ${BankAccount1.owner}\nAccount's balance is: ${BankAccount1.getBalance()}\n`)
console.log(`Account's number is: ${BankAccount2.number}\nAccount's owner is: ${BankAccount2.owner}\nAccount's balance is: ${BankAccount2.getBalance()}\n`)
console.log(`Account's number is: ${BankAccount3.number}\nAccount's owner is: ${BankAccount3.owner}\nAccount's balance is: ${BankAccount3.getBalance()}\n`)