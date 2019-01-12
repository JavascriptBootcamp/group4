function BankAccount(number, owner) {
    this.number = number;
    this.owner = owner;
    var balance = 0;
    this.withdraw = (amount) => {
        balance -= amount;
    };
    this.deposit = (amount) => {
        balance += amount;
    };
    this.getBalance = () => {
        return balance;
    }
}

var accounts = [];
accounts.push(new BankAccount(233, 'David'));
accounts.push(new BankAccount(235, 'Katy'));
accounts.push(new BankAccount(236, 'Megan'));

accounts.forEach((account) => {
    account.deposit(1000);
});

accounts.forEach((account, i) => {
    switch(i){
        case 0:
            account.withdraw(200);
            break;
        case 1:
            account.withdraw(500);
            break;
        case 2:
            account.withdraw(1500);
    }
});
console.log('-----------');
accounts.forEach((account) => {
    console.log('Number:', account.number);
    console.log('Name:', account.owner);
    console.log('Balance:', account.getBalance());
    console.log('-----------');
});
