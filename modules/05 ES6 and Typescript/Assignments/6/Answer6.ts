interface IPlay{
    play(song:string):void;
    next():void;
    prev():void;
}
enum instrument{
    guitar = "Guitar",
    drums = "Drums",
    bass = "Bass",
    none = "None"
} 
enum Color{
    red = "Red",
    blue = "Blue",
    yellow = "Yellow"
}
class Musician implements IPlay{
    name:string;
    age:number;
    instrument: instrument
    constructor(name: string,age:number, instrument:instrument) {
        this.name = name;
        this.age = age;
        this.instrument = instrument;
    }
    play(song:string){
        console.log(song);
    }
    next(){
        console.log("Next in Musician");
    }
    prev(){
        console.log("Perv in Musician");
    }
}
class Band implements IPlay{
    name:string;
    musicians: Musician[];
    constructor(name:string,musicians:Musician[]){
        this.name = name;
        this.musicians = musicians;
    }
    play(song:string){
        console.log(song);
    }
    next(){
        console.log("Next in Band");
    }
    prev(){
        console.log("Perv in Band");
    }
}

class Radio implements IPlay{
    brand: string;
    color: Color;
    price: number;
    constructor(brand:string,color:Color,price:number){
        this.brand = brand;
        this.color = color;
        this,price = price;
    }
    play(song:string){
        console.log(song);
    }
    next(){
        console.log("Next in Radio");
    }
    prev(){
        console.log("Perv in Radio");
    }
}

let myRadio = new Radio("Radio Darom",Color.red,54);
myRadio.play("Yonatan Hakatan");
myRadio.next();
myRadio.prev();

console.log("");
console.log("") 

let myMusician = new Musician("Singolda",51,instrument.guitar);
myMusician.play("Ahavtia");
myMusician.next();
myMusician.prev();

console.log("");
console.log("") 

let myBand = new Band("For The Throne",
                    [new Musician("Dan",31,instrument.bass),
                     new Musician("Avi",35,instrument.drums),
                     new Musician("Yoni",43,instrument.guitar),
                     new Musician("Tom",27,instrument.none)])
myBand.play("Stairway to Heaven");
myBand.next();
myBand.prev();
let songNum: number = 1;

console.log("");
console.log("") 

for(let _musician of myBand.musicians){
    _musician.play(`Song number ${songNum++}`);
    _musician.prev();
    _musician.next();
    console.log("");
    console.log("") 
    
}

