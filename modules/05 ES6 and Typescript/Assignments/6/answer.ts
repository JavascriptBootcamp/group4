import { IPlay, Instrument,Color } from './IPlay';

class Musician implements IPlay {

    private name: string;
    private age: number;
    instrument: Instrument;

    constructor(name: string, age: number, i: Instrument) {
        this.name = name;
        this.age = age;
        this.instrument = i;
    }

    play = (song: string): void => {
        console.log(`the Musician ${this.name} play ${song}`);
    }
    next = (): void => {
        console.log(`the Musician ${this.name} set next song`);
    }
    prev = (): void => {
        console.log(`the Musician ${this.name} set prev song`);
    }

}

class Band implements IPlay {

    private name: string;
    private musicians:Musician[];
    
    constructor(name: string, musicians:Musician[]) {
        this.name = name;
        this.musicians=musicians;
    }

    play = (song: string): void => {
        console.log(`the Band ${this.name} play ${song}`);
    }
    next = (): void => {
        console.log(`the Band ${this.name} set next song`);
    }
    prev = (): void => {
        console.log(`the Band ${this.name} set prev song`);
    }

}

class Radio implements IPlay {

    private brand: string;
    private price : number;
    private color: Color;
    
    constructor(brand: string, price : number, color: Color) {
        this.brand = brand;
        if(price)
        this.price = price;
        this.color = color;
    }

    play = (song: string): void => {
        console.log(`the Radio from brand ${this.brand} play ${song}`);
    }
    next = (): void => {
        console.log(`the Radio from brand ${this.brand} set next song`);
    }
    prev = (): void => {
        console.log(`the Radio from brand ${this.brand} set prev song`);
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
