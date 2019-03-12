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
        console.log(`musician : ${this._name} is now playing ${song}`);
    }
    public next() {
        if (songs[index + 1]) {
            index++;
        }
        else {
            index = 0;
        }
        console.log(`musician : ${this._name} is now playing ${songs[index]}`);
    }
    public prev() {
        if (songs[index - 1]) {
            index--;
        }
        else {
            index = songs.length-1;
        }
        console.log(`musician : ${this._name} is now playing ${songs[index]}`);
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
        console.log(`band : ${this._name} is now playing ${song}`);
    }
    public next() {
        if (songs[index + 1]) {
            index++;
        }
        else {
            index = 0;
        }
        console.log(`band : ${this._name} is now playing ${songs[index]}`);
    }
    public prev() {
        if (songs[index - 1]) {
            index--;
        }
        else {
            index = songs.length-1;
        }
        console.log(`band : ${this._name} is now playing ${songs[index]}`);
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
        console.log(`radio : ${this._brand} is now playing ${song}`);
    }
    public next() {
        if (songs[index + 1]) {
            index++;
        }
        else {
            index = 0;
        }
        console.log(`radio : ${this._brand} is now playing ${songs[index]}`);
    }
    public prev() {
        if (songs[index - 1]) {
            index--;
        }
        else {
            index = songs.length-1;
        }
        console.log(`radio : ${this._brand} is now playing ${songs[index]}`);
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
let songs: Array<string> = ["song1", "song2", "song3", "song4",], index = 0;

import * as module from "./myplayer";
let radio1: module.Radio = new module.Radio("poineer", color.blue, 350);
radio1.play(songs[index]);
radio1.next();
radio1.next();
radio1.prev();
let musician1: module.Musician = new module.Musician("gaby", 30, instrument.Guitar);
let musician2: module.Musician = new module.Musician("yosi", 40, instrument.Drums);
let musician3: module.Musician = new module.Musician("maly", 37, instrument.None);
let musician4: module.Musician = new module.Musician("nissan", 46, instrument.Bass);
musician1.play(songs[index]);
musician2.prev();
musician3.next();
musician4.play(songs[index]);
let band1: module.Band = new module.Band("bandRock", [musician1, musician2, musician3, musician4]);
band1.play(songs[index]);
band1.prev();
band1.next();

