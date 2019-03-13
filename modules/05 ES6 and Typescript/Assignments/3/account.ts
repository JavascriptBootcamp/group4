class Account {

  protected number: number;
  protected owner: string;
  protected balance: number;

  constructor(number: number, owner: string) {
      this.number = number;
      this.owner = owner;

      this.balance = 0;
  }
  
  getBalance() {
      return this.balance;
  }
}
