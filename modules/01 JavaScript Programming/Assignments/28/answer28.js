

    function BankAccount(number,owner){

        var balance = 0 ;     
        this.number = number ;
        this.owner = owner ;
        
        this.withdraw = function(amount){
             balance -= amount;
        }
        
        this.deposit = function(amount){
             balance += amount;
        }
        
        this.getBalance = function(){
             return balance ;
        }
        
        }
        
        var B1 = new BankAccount("66857414","ron");
        var B2 = new BankAccount("66852841","yaron");
        var B3 = new BankAccount("66854747","dom");
        
        B1.deposit(1000);
        B2.deposit(1000);
        B3.deposit(1000);
        
        B1.withdraw(200);
        B2.withdraw(500);
        B3.withdraw(1500);
        
        console.log("first account: owner:",B1.owner,", number:",B1.number,", balance:",B1.getBalance())
        console.log("second account: owner:",B2.owner,", number:",B2.number,", balance:",B2.getBalance())
        console.log("third account: owner:",B3.owner,", number:",B3.number,", balance:",B3.getBalance())