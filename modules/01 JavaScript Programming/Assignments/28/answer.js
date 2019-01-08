function BankAccount(number,owner){
    this.number = number;
    this.owner = owner;
    this.balance = 0;

    this.withdraw = function(amount){
        this.balance -= amount;
    }

    this.deposit = function(amount){
        this.balance += amount;
    }
    this.getBalance = function(){
        return this.balance;
    }
    this.toString = function(){
        console.log("Number:",this.number,", Name:", this.owner, ", Balance:", this.balance);
    }
}

danielBA = new BankAccount(123456,'Daniel');
uriellBA = new BankAccount(234567,'Uriel');
nadavBA = new BankAccount(345678,'Nadav');

danielBA.deposit(1000);
uriellBA.deposit(1000);
nadavBA.deposit(1000);

danielBA.withdraw(200);
uriellBA.withdraw(500);
nadavBA.withdraw(1500);

danielBA.toString();
danielBA.toString.call(uriellBA);
nadavBA.toString();

