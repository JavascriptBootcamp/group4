import { Iplay } from "./Iplay";

enum Instrument{
    "Guitar",
    "Drums",
    "Bass",
    "None"
}

enum Color{
    "Red",
    "Blue",
    "Yellow"
}

class Musician implements Iplay{
    private _name: string;
    private _age: number;
    private _instrument: Instrument;

    public setName(name: string){
        this._name = name;
    }

    public getName(): string{
        return this._name;
    }

    // set name(name: string){
    //     this._name = name;
    // }

    // get name(): string{
    //     return this._name;
    // }

    // set age(age: number){
    //     this._age = age;
    // }

    // get age(): number{
    //     return this._age;
    // }

    // set instrument(instrument: Instrument){
    //     this._instrument = instrument;
    // }

    // get instrument(): Instrument{
    //     return this._instrument;
    // }

    constructor(name: string, age: number, instrument: Instrument){
        this._name = name;
        this._age = age;
        this._instrument = instrument;
    }

    public play(song: string): void{
        console.log(song);
    }

    public next(): void{
        console.log("next song");
    }

    prev(): void{
        console.log("prev song");
    }
}

class Band implements Iplay{
    private _name: string;
    private _musicians: Musician[] = [];

    public setName(name: string){
        this._name = name;
    }

    public getName(): string{
        return this._name;
    }

    // set musicians(musicians: Array<Musician>){
    //     for(let musican of musicians){
    //         this._musicians.push(musican);
    //     }
    // }

    // get musicians(): Array<Musician>{
    //     return this._musicians;
    // }

    constructor(name: string, musicians: Musician[]){
        this._name = name;
        for(let musician of musicians){
            this._musicians.push(musician);
        }
    }

    public play(song: string): void{
        for(let musician of this._musicians){
            musician.play(musician.getName() + "'s " +  song);
            musician.next();
            musician.prev();
        }    }

    public next(): void{
        console.log("next song");
    }

    prev(): void{
        console.log("prev song");
    }

}

class Radio implements Iplay{
    private _brand : string;
    private _musicians: Musician[] = [];
    private _color : Color;
    private _price: number;

    constructor(brand: string, musicians: Musician[], color: Color, price: number){
        this._brand = brand;
        this._color = color;
        this._price = price;
        for(let musician of musicians){
            this._musicians.push(musician);
        }

    }

    // set brand(band: string){
    //     this._brand = band;
    // }

    // get brand(): string{
    //     return this._brand;
    // }

    // set musicians(musicians: Array<Musician>){
    //     for(let musican of musicians){
    //         this.musicians.push(musican);
    //     }
    // }

    // get musicians(): Array<Musician>{
    //     return this._musicians;
    // }

    // set color(color: Color){
    //     this._color = color;
    // }

    // get color(): Color{
    //     return this._color;
    // }
    
    // set price(price: number){
    //     this._price = price;
    // }

    // get price(): number{
    //     return this._price;
    //}

    public play(song: string): void{
        console.log(song);
    }

    public next(): void{
        console.log("next song");
    }

    prev(): void{
        console.log("prev song");
    }
}



const hm: Musician = new Musician("Haim Moshe",40,Instrument.Bass);
const za: Musician = new Musician("Zohar Argov",50,Instrument.Drums);
const eg: Musician = new Musician("Eyal Golan",45,Instrument.Guitar);
const sa: Musician = new Musician("Shlomo Arzi",45,Instrument.None);

const tipeks : Musician[] = [hm,za,eg,sa];

const band: Band = new Band("Tipeks",tipeks);

const radio: Radio = new Radio("LG",tipeks,Color.Blue,450);


radio.play("Badad");
radio.next();
radio.prev();

hm.play("Nishba");
hm.next();
hm.prev();

band.play("new song");
