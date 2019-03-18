interface IPlay{
    play(song:any):void;
    next():void ;
    prev():void;

}

enum instruments{
    "Guitar", "Drums", "Bass" , "None"
}

enum colorsEnum{
    "Red", "Blue", "Yellow"
}
class Musician implements IPlay{
       private name:string;
        private age :number;
        private instrument:instruments; 


constructor(name :string,age:number , instrument :instruments){
    this.name=name;
    this.age=age;
    this.instrument=instrument;

} 
play(song : any):void{
console.log(`this is the son ${song}`);
    }
    next():void {
        console.log(`Musician next`);

    }
    prev():void{
        console.log(`Musician previous`);

    }
}
class Band implements IPlay{
    private name:string;
    private musicians:Array<Musician>;
        constructor(name:string,musicians:Array<Musician>){
            this.name=name;
            this.musicians=musicians;
        }


    play(song  : any):void{
        console.log(`this is the song ${song}`);

    }
    next():void {
        console.log(`Band next`);

    }
    prev():void{
        console.log(`Band previous`);

    }


}
class Radio implements IPlay{
    private brand :string;
    private color: colorsEnum;
    private price : number;

    constructor( brand :string,color: colorsEnum,price : number){
        this.brand=brand;
        this.color=color;
        this.setPrice(price);

    }

    // set property of price
    setPrice(price :number){
        if (price >= 0)
            this.price = price;
        else
            throw new Error("price must be positive");
    }




    play(song  : any):void{
        console.log(`this is the son ${song}`);
  
    }
    next():void {
        console.log(`Radio next`);

    }
    prev():void{
        console.log(`Radio previous`);

    }


}


var radioInstance = new Radio("a-pink",colorsEnum.Blue,500);
radioInstance.play("Hello World Hello World Hi Hi .. ");
radioInstance.next();
radioInstance.prev();

var musicianInstance1 = new Musician("Mark",28,instruments.Bass);
musicianInstance1.play("Hello World Hello World Hi Hi .. ");
musicianInstance1.next();
musicianInstance1.prev();
var musicianInstance2= new Musician("Lusy",28,instruments.Guitar);
musicianInstance2.play("Hello World Hello World Hi Hi .. ");
musicianInstance2.next();
musicianInstance2.prev();
var musicianInstance3 = new Musician("Suzi",28,instruments.Drums);
musicianInstance3.play("Hello World Hello World Hi Hi .. ");
musicianInstance3.next();
musicianInstance3.prev();
var musicianInstance4 = new Musician("Jak",28,instruments.None);
musicianInstance4.play("Hello World Hello World Hi Hi .. ");
musicianInstance4.next();
musicianInstance4.prev();

const musiciansArray: Musician[] = [musicianInstance1,musicianInstance2,musicianInstance3,musicianInstance4];
var bandInstance : Band = new Band("TypeScriptBand",musiciansArray);
bandInstance.play("Hello World Hello World Hi Hi .. ");
bandInstance.next();
bandInstance.prev();


