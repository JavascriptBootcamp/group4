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

    set name(name: string){
        this._name = name;
    }

    get name(): string{
        return this._name;
    }

    set age(age: number){
        this._age = age;
    }

    get age(): number{
        return this._age;
    }

    set instrument(instrument: Instrument){
        this._instrument = instrument;
    }

    get instrument(): Instrument{
        return this._instrument;
    }

    constructor(){

    }

    public play(song: string): string | void{

    }

    public next(): string | void{

    }

    prev(): string | void{

    }
}

class Band implements Iplay{
    private _name: string;
    private _musicians: Array<Musician>;

    set name(name: string){
        this._name = name;
    }

    get name(): string{
        return this._name;
    }

    set musicians(musicians: Array<Musician>){
        for(let item of musicians){
            this._musicians.push(item);
        }
    }

    get musicians(): Array<Musician>{
        return this._musicians;
    }

    constructor(){

    }

    public play(song: string): string | void{

    }

    public next(): string | void{

    }

    prev(): string | void{

    }

}

class Radio implements Iplay{
    private _brand : string;
    private _musicians: Array<Musician>;
    private _color : Color;
    private _price: number;

    constructor(){

    }

    set brand(band: string){
        this._brand = band;
    }

    get brand(): string{
        return this._brand;
    }

    set musicians(musicians: Array<Musician>){
        for(let item of musicians){
            this._musicians.push(item);
        }
    }

    get musicians(): Array<Musician>{
        return this._musicians;
    }

    set color(color: Color){
        this._color = color;
    }

    get color(): Color{
        return this._color;
    }
    
    set price(price: number){
        this._price = price;
    }

    get price(): number{
        return this._price;
    }

    public play(song: string): string | void{

    }

    public next(): string | void{

    }

    prev(): string | void{

    }
}

