function BankAccount (number,owner){

    this.account=null;
    this.number=number;
    this.owner=owner;

    this.withdraw = function(amount){
        this.account -= amount;
   }

   this.deposit = function(amount){
        this.account += amount;
   }

   this.getAccount = function(){
        return this.account ;
   }

   }
   

   var A1 = new BankAccount('121341','avi');
   var A2 = new BankAccount('231415','yosi');
   var A3 = new BankAccount('412121','moti');

   A1.deposit(1000);
   A2.deposit(1000);
   A3.deposit(1000);

   A1.withdraw(200);
   A2.withdraw(500);
   A3.withdraw(1500);

   console.log("owner:",A1.owner,", number:",A1.number,", Current account:",A1.getAccount())
   console.log("owner:",A2.owner,", number:",A2.number,", Current account:",A2.getAccount())
   console.log("owner:",A3.owner,", number:",A3.number,", Current account:",A3.getAccount())
