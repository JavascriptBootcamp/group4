class Thearte {

    name :string;
    openHour:number; 
    closeHour:number; 

    constructor(name:string,openHour:number=8,closeHour:number=18,seats:number){
        this.name = name;
        this.openHour = openHour;
        this.closeHour = closeHour;
    }

    calcOpenDuring():number{
      return this.closeHour-this.openHour;
    }

    printToDom():void{
        document.body.innerHTML += `
        <div>
          <p>theatre's name : ${this.name}</p>
          <p>opening hour : ${this.openHour}</p>
          <p>closing hour :${this.closeHour}</p>
       </div>
        `
    }
}

const theatre1 = new Thearte("habima",10 , 21,300);
console.log(theatre1.calcOpenDuring());
theatre1.printToDom();

const theatre2 = new Thearte("kameri",9 , 20,500);
console.log(theatre2.calcOpenDuring());
theatre2.printToDom();
