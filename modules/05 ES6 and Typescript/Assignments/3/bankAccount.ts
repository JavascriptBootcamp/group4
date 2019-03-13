class BankAccount extends Account {
  constructor(number, owner) {
      super(123, "Some name");
      this.balance = 0;
  }

  withdraw(amount: number) {
    return this.balance -= amount;
  }

  deposit(amount: number) {
    return this.balance += amount;
  }

  getBankAccountNumber() {
    return this.number;
  }

  getBankAccountOwner() {
    return this.owner;
  }
}
