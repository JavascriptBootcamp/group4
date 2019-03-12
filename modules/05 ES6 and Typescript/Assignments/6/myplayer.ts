export interface Iplay {
    play(song: string): void;
    next(): string | void;
    prev(): string | void;
}
export class Musician implements Iplay {
    public _name: string;
    public _age: number;
    public _instrument: instrument;
    constructor(name, age, instruments) {
        this._name = name;
        this._age = age;
        this._instrument = instruments;
    }
    public play(song: string) {
        console.log(`${song} is playing now`);
    }
    public next() {

    }
    public prev() {

    }
}
export class Band implements Iplay {
    public _name: string;
    public _musicians: Array<Musician>;
    constructor(name, musician) {
        this._name = name;
        this._musicians = musician;
    }
    public play(song: string) {
        console.log(`${song} is playing now`);
    }
    public next() {

    }
    public prev() {

    }
}
export class Radio implements Iplay {
    public _brand: string;
    public _color: color;
    public _price: number;
    constructor(brand, color, price) {
        this._brand = brand;
        this._color = color;
        this._price = price;
    }
    public play(song: string) {
        console.log(`${song} is playing now`);
    }
    public next() {
    }
    public prev() {
        console.log(`${module.songs[module.index - 1]} is playing now`);
    }
}
export enum instrument {
    Guitar = "Guitar",
    Drums = "Drums",
    Bass = "Bass",
    None = "None"
}
export enum color {
    red = "red",
    blue = "blue",
    yellow = "yellow",
}
export let songs: Array<string> = ["song1", "song2", "song3", "song4",], index = 0;

import * as module from "./myplayer";
let radio1: module.Radio = new module.Radio("poineer", color.blue, 350);
radio1.play(module.songs[module.index]);
// radio1.prev();
// radio1.next();
let musician1: module.Musician = new module.Musician("gaby", 30, instrument.Guitar);
let musician2: module.Musician = new module.Musician("yosi", 40, instrument.Drums);
let musician3: module.Musician = new module.Musician("maly", 37, instrument.None);
let musician4: module.Musician = new module.Musician("nissan", 46, instrument.Bass);
musician1.play(module.songs[1]);
//musician1.prev();
// musician1.next();
musician2.play(module.songs[2]);
let band1: module.Band = new module.Band("bandRock", [musician1, musician2, musician3, musician4]);
//console.log(band1._musicians);
band1.play(module.songs[3]);
//band1.prev();
// band1.next();

