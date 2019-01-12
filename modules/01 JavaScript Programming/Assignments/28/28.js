            function BankAccount(number,owner){

                this.number=number;
                this.owner=owner;
                this.amount=0;
               this.withdraw=function(amount){
                   this.amount-=amount;
               }
               this.deposit=function(amount){
                this.amount+=amount;

            }
            this.getBalance=function(){
                return this.amount;
            }
            }

            var bankAcoount1=new BankAccount("1","Suzi");
            var bankAcoount2=new BankAccount("2","Maichel");
            var bankAcoount3=new BankAccount("3","Alan");
            bankAcoount1.deposit(1000);
            bankAcoount2.deposit(1000);
            bankAcoount3.deposit(1000);

            bankAcoount1.withdraw(200);
            bankAcoount2.withdraw(1000);
            bankAcoount3.withdraw(1500);
            console.log(bankAcoount1.getBalance());
            console.log(bankAcoount2.getBalance());
            console.log(bankAcoount3.getBalance());

