enum Instrument {
    Guitar = "Guitar", 
    Drums = "Drums", 
    Bass = "Bass", 
    None = "None"
}

enum Color  {
    Red = "Red", 
    Blue = "Blue", 
    Yellow = "Yellow" 
}  

interface IPlay {
    play : (song:string) => void,
    next : () => string | void,
    perv : () => string | void
}

class Musician implements IPlay {
    name:string;
    age:number;
    instrument:Instrument;

    constructor(name:string, age:number, instrument:Instrument) {
        this.name = name;
        this.age = age;
        this.instrument = instrument;
    }

    play(song:string):void {
        if(this.instrument === Instrument.Guitar){
            console.log("Guitar - *song* *song* *song");
        }
        else if(this.instrument === Instrument.Bass){
            console.log("Bass- *bam* *bam* *bam");
        }
        else if(this.instrument === Instrument.Drums){
            console.log("Drums- *boom* *boom* *boom");
        }
        else if(this.instrument === Instrument.None){
            console.log("None- *la* *la* *la");
        }

    }

    next():string | void {}
    perv():string | void{}
}

class Band implements IPlay {

    name:string;
    musicians:Musician[];

    constructor(name:string, musicians:Musician[]) {
        this.name = name;
        this.musicians = musicians;
    }

    play(song:string):void {
        console.log(`Now playing ${song} of '${this.name}' band `);
        for (const musician of this.musicians) {
            musician.play(song);
        }

    }

    next():string | void {}
    perv():string | void{}
}

class Radio implements IPlay {
    brand:string;
    price:number;
    color:Color; 

    constructor(brand:string, price:number,color:Color) {
        this.brand = brand;
        this.price = price;
        this.color = color;
    }

    play(song:string):void {

    }

    next():string | void {

    }
    perv():string | void{
        
    }
}