export interface Iplay {
    play(song: string): void;
    next(): [string, void];
    prev(): [string, void];
}
export class Musician implements Iplay {
    constructor(public name: string, public age: number, public instruments: instrument) {
        this.name = name;
        this.age = age;
        this.instruments = instruments;
    }
    public play(song: string) {
        console.log(`musician : ${this.name} is now playing ${song}`);
    }
    public next(): [string, void] {
        if (songs[index + 1]) {
            index++;
        }
        else {
            index = 0;
        }
        return [`musician : `, console.log(`${this.name} is now playing ${songs[index]}`)];
    }
    public prev(): [string, void] {
        if (songs[index - 1]) {
            index--;
        }
        else {
            index = songs.length - 1;
        }
        return [`musician : `, console.log(`${this.name} is now playing ${songs[index]}`)];
    }
}
export class Band implements Iplay {
    constructor(public name: string, public musician: Array<Musician>) {
        this.name = name;
        this.musician = musician;
    }
    public play(song: string) {
        console.log(`band : ${this.name} is now playing ${song}`);
    }
    public next(): [string, void] {
        if (songs[index + 1]) {
            index++;
        }
        else {
            index = 0;
        }
        return [`band : `, console.log(`${this.name} is now playing ${songs[index]}`)];
    }
    public prev(): [string, void] {
        if (songs[index - 1]) {
            index--;
        }
        else {
            index = songs.length - 1;
        }
        return [`band : `, console.log(`${this.name} is now playing ${songs[index]}`)];
    }
}
export class Radio implements Iplay {
    constructor(public brand: string, public color: color, public price: number) {
        this.brand = brand;
        this.color = color;
        this.price = price;
    }
    public play(song: string) {
        console.log(`radio : ${this.brand} is now playing ${song}`);
    }
    public next(): [string, void] {
        if (songs[index + 1]) {
            index++;
        }
        else {
            index = 0;
        }
        return [`radio :`, console.log(`${this.brand} is now playing ${songs[index]}`)];
    }
    public prev(): [string, void] {
        if (songs[index - 1]) {
            index--;
        }
        else {
            index = songs.length - 1;
        }
        return [`radio :`, console.log(`${this.brand} is now playing ${songs[index]}`)];
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
let [r] = radio1.next();
[r] = radio1.next();
[r] = radio1.prev();
let musician1: module.Musician = new module.Musician("gaby", 30, instrument.Guitar);
let musician2: module.Musician = new module.Musician("yosi", 40, instrument.Drums);
let musician3: module.Musician = new module.Musician("maly", 37, instrument.None);
let musician4: module.Musician = new module.Musician("nissan", 46, instrument.Bass);
musician1.play(songs[index]);
let [m] = musician2.prev();
[m] = musician3.next();
musician4.play(songs[index]);
let band1: module.Band = new module.Band("bandRock", [musician1, musician2, musician3, musician4]);
band1.play(songs[index]);
let [b] = band1.prev();
[b] = band1.next();

