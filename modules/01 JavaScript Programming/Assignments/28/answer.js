function BankAccount(number,owner){
    this.number=number;
    this.owner=owner;
    this.amount=0;
    this.withdraw= function(amount){
            this.amount=this.amount-amount;
    }
    this.deposit= function(amount){
        this.amount=this.amount+amount;
    }
    this.getBalance= function(){
        return this.amount;
    }
}
var Bank1 = new BankAccount(123456,"shimon")
Bank1.deposit(1000)
Bank1.withdraw(200)
var Bank2 = new BankAccount(546548,"shipoi")
Bank2.deposit(1000)
Bank2.withdraw(500)
var Bank3 = new BankAccount(687465,"shijio")
Bank3.deposit(1000)
Bank3.withdraw(1500)

console.log("account numer of bank acc 1 is: "+Bank1.number+" the name is: "+Bank1.owner+" the bal is: "+Bank1.amount)
console.log("account numer of bank acc 2 is: "+Bank2.number+" the name is: "+Bank2.owner+" the bal is: "+Bank2.amount)
console.log("account numer of bank acc 3 is: "+Bank3.number+" the name is: "+Bank3.owner+" the bal is: "+Bank3.amount)

// account numer of bank acc 1 is: 123456 the name is: shimon the bal is: 800
// account numer of bank acc 2 is: 546548 the name is: shipoi the bal is: 500
// account numer of bank acc 3 is: 687465 the name is: shijio the bal is: -500
