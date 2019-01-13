function BankAccount (AccountNumber,AccountOwner) {
    this.AccountNumber=AccountNumber;
    this.AccountOwner=AccountOwner;
    var balence = 0;
    this.withdraw  = function(amount) {
        balence -= amount;
    }; 
    this.deposit = function(amount) {
        balence += amount; 
    }; 
    this.getBalance  = function() {
        return balence;
    };
}

var BA1 = new BankAccount("1234567", "Avraham");
var BA2 = new BankAccount("1234568", "Ytzhak");
var BA3 = new BankAccount("1234569", "Jacove");

BA1.deposit(1000);
BA2.deposit(1000);
BA3.deposit(1000);

BA1.withdraw(200);
BA2.withdraw(500);
BA3.withdraw(1500);

console.log("Acount number: "+BA1.AccountNumber+". Name: "+BA1.AccountOwner+". Balance: "+BA1.getBalance());
console.log("Acount number: "+BA2.AccountNumber+". Name: "+BA2.AccountOwner+". Balance: "+BA2.getBalance());
console.log("Acount number: "+BA3.AccountNumber+". Name: "+BA3.AccountOwner+". Balance: "+BA3.getBalance());

