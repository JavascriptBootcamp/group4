class Thearte {

    name :string;
    openHour:number; 
    closeHour:number;
    seats?:number; 

    constructor(name:string, openHour:number = 8, 
                closeHour:number = 18, seats?:number){
        
        this.name = name;
        this.setOpen(openHour);
        this.setClose(closeHour);
    }

      setOpen(openTime:number){
        if (openTime < 8 || openTime > 12)
          this.openHour = 8;
        else
        this.openHour = openTime;


      }

      setClose(closeTime:number){
        if(closeTime < 18 || closeTime > 22)
        this.closeHour = 22;
        else
        this.closeHour = closeTime;
      }

    calcOpenDuring():number{
      return this.closeHour-this.openHour;
    }

    printToDom():void{
        document.body.innerHTML += `
        <div>
          <p>theatre's name: ${this.name}</p>
          <p>opening hour :  ${this.openHour}</p>
          <p>closing hour :  ${this.closeHour}</p>
       </div>
        `
    }
}

const theatre1 = new Thearte("Habima",10 , 23, 300);
console.log(theatre1.calcOpenDuring());
theatre1.printToDom();

const theatre2 = new Thearte("Kameri",7 ,20);
console.log(theatre2.calcOpenDuring());
theatre2.printToDom();
