
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

    play(song: string): void;
    next(): string | void;
    prev(): string | void;
}

class Musician implements IPlay {

    private name: string;
    private age: number;
    private instrument: Instrument;

    constructor(_name: string, _age: number, _instrument: Instrument) {
        this.name = _name;
        this.age = _age;
        this.instrument = _instrument;
    }

    play = (song: string): void => {
        console.log(song);
    }
    next = (): string | void => {

    }
    prev = (): string | void => {

    }
}

class Band implements IPlay {

    private name: string;
    private musicians:Musician[];
    constructor(_name: string, _musicians:Musician[]) {
        this.name = _name;
        this.musicians = _musicians;
    }
    play = (song: string): void => {
        console.log(song);
    }
    next = (): string | void => {
    }
    prev = (): string | void => {
    }
}

class Radio implements IPlay {
    private  brand:string;
    private price:number;
    private color:Color; 

    constructor(_brand:string, _price:number,_color:Color) {
        this.brand = _brand;
        this.price = _price;
        this.color = _color;
    }

    play = (song: string): void => {
        console.log(song);
    }
    next = (): string | void => {
    }
    prev = (): string | void => {
    }
} 

let radio = new Radio ("Gimel",89 ,Color.Blue);
radio.play("To night");
radio.next();
radio.prev();

let musician1=new Musician("David",29,Instrument.Bass);
musician1.play("bla bla");
musician1.next();
musician1.prev();

let musician2=new Musician("Eli",31,Instrument.Drums);
let musician3=new Musician("Moti",22,Instrument.Guitar);
let musician4=new Musician("Ella",25,Instrument.Guitar);

let band1 = new Band ("Yehudim" , [musician2,musician2,musician3,musician4]);
band1.play("Tutim");
band1.next();
band1.prev();
