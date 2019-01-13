function BankAccount(number, owner)
{
    this.number = number;
    this.owner = owner;
    var currentBalanace = 0;

    this.withdraw = function(amount)
    {
        currentBalanace -= amount;
    }

    this.deposit = function(amount)
    {
        currentBalanace += amount;
    }

    this.getBalance = function()
    {
        return currentBalanace;
    }
}

// Test

var accounts = [];
accounts.push(new BankAccount(1, "Guy"), new BankAccount(2, "Shmulik"), new BankAccount(3, "David"));

console.log(accounts);

accounts.forEach(account => 
{
    account.deposit(1000);
})

accounts[0].withdraw(200);
accounts[1].withdraw(500);
accounts[2].withdraw(1500);

accounts.forEach(account =>
{
console.log("Account #:", account.number, "Account's owner:", account.owner, "Account's balance:", account.getBalance());
})
