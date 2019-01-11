
function BankAccount  (owner,number){
    
    this.number=number;
    this.owner=owner;
    this.balance=0;
    this.withdraw =function(amount) {
        this.balance+=amount;
        }
    this.deposit =function(amount) {
            this.balance-=amount;
            }
    this.getBalance=  function  (value) {
            return this.balance;
     }
  

}
var litalsAccount = new BankAccount("lital",5555);
var omersccount = new BankAccount("omer",1111);
var noamsccount = new BankAccount("noam",2222);
litalsAccount.deposit(1000);
omersccount.deposit(1000);
noamsccount.deposit(1000);
litalsAccount.withdraw(200);
omersccount.withdraw(500);
noamsccount.withdraw(1500)

console.log(`name: ${litalsAccount.owner}, number ${litalsAccount.number}, number ${litalsAccount.getBalance()}`)
function BankAccount  (owner,number){
    
    this.number=number;
    this.owner=owner;
    this.balance=0;
    this.withdraw =function(amount) {
        this.balance+=amount;
        }
    this.deposit =function(amount) {
            this.balance-=amount;
            }
    this.getBalance=  function  (value) {
            return this.balance;
     }
  

}
var litalsAccount = new BankAccount("lital",5555);
var omersccount = new BankAccount("omer",1111);
var noamsccount = new BankAccount("noam",2222);
litalsAccount.deposit(1000);
omersccount.deposit(1000);
noamsccount.deposit(1000);
litalsAccount.withdraw(200);
omersccount.withdraw(500);
noamsccount.withdraw(1500)

console.log(`name: ${litalsAccount.owner}, number ${litalsAccount.number}, number ${litalsAccount.getBalance()}`)
function BankAccount  (owner,number){
    
    this.number=number;
    this.owner=owner;
    this.balance=0;
    this.withdraw =function(amount) {
        this.balance+=amount;
        }
    this.deposit =function(amount) {
            this.balance-=amount;
            }
    this.getBalance=  function  (value) {
            return this.balance;
     }
  

}
var litalsAccount = new BankAccount("lital",5555);
var omersccount = new BankAccount("omer",1111);
var noamsccount = new BankAccount("noam",2222);
litalsAccount.deposit(1000);
omersccount.deposit(1000);
noamsccount.deposit(1000);
litalsAccount.withdraw(200);
omersccount.withdraw(500);
noamsccount.withdraw(1500)

console.log(`name: ${litalsAccount.owner}, number ${litalsAccount.number}, number ${litalsAccount.getBalance()}`)
console.log(`name: ${omersccount.owner}, number ${omersccount.number}, number ${omersccount.getBalance()}`)
console.log(`name: ${noamsccount.owner}, number ${noamsccount.number}, number ${noamsccount.getBalance()}`)
