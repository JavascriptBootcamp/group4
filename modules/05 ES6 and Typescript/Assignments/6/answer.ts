interface Iplay {
    play(song: string): void;
    next(): void;
    prev(): void;
}
class Musician implements Iplay {
    index:number;
    constructor(public name: string, public age: number, public instruments: instrument) {
        this.name = name;
        this.age = age;
        this.instruments = instruments;
        this.index=1;
    }
    public play(song: string) {
        console.log(`(play func)musician : ${this.name} is now playing ${song}`);
    }
    public next(): void {
        if (songs[this.index + 1]) {
            this.index++;
        }
        else {
            this.index = 0;
        }
        console.log(`(next func)musician : ${this.name} is now playing ${songs[this.index]}`);
    }
    public prev(): void {
        if (songs[this.index - 1]) {
            this.index--;
        }
        else {
            this.index = songs.length - 1;
        }
        console.log(`(prev func) musician : ${this.name} is now playing ${songs[this.index]}`);
    }
}
class Band implements Iplay {
    index:number;
    constructor(public name: string, public musician: Array<Musician>) {
        this.name = name;
        this.musician = musician;
        this.index=1
    }
    public play(song: string) {
        console.log(`(play func)band : ${this.name} is now playing ${song}`);
    }
    public next(): void {
        if (songs[this.index + 1]) {
            this.index++;
        }
        else {
            this.index = 0;
        }
        console.log(`(next func)band ${this.name} is now playing ${songs[this.index]}`);
    }
    public prev(): void {
        if (songs[this.index - 1]) {
            this.index--;
        }
        else {
            this.index = songs.length - 1;
        }
        console.log(`(prev func)band ${this.name} is now playing ${songs[this.index]}`);
    }
}
class Radio implements Iplay {
    index:number;
    constructor(public brand: string, public color: color, public price: number) {
        this.brand = brand;
        this.color = color;
        this.price = price;
        this.index=1;
    }
    public play(song: string) {
        console.log(`(play func) radio : ${this.brand} is now playing ${song}`);
    }
    public next(): void {
        if (songs[this.index + 1]) {
            this.index++;
        }
        else {
            this.index = 0;
        }
        console.log(`(next func) radio ${this.brand} is now playing ${songs[this.index]}`);
    }
    public prev(): void {
        if (songs[this.index - 1]) {
            this.index--;
        }
        else {
            this.index = songs.length - 1;
        }
        console.log(`(prev func)radio ${this.brand} is now playing ${songs[this.index]}`);
    }
}
enum instrument {
    Guitar = "Guitar",
    Drums = "Drums",
    Bass = "Bass",
    None = "None"
}
enum color {
    red = "red",
    blue = "blue",
    yellow = "yellow",
}
let songs: Array<string> = ["song1", "song2", "song3", "song4","song5", "song6", "song7", "song8"];

let radio1 = new Radio("jvc", color.blue, 350);
radio1.play(songs[radio1.index]);
radio1.next();
radio1.next();
radio1.prev();
let musician1 = new Musician("david", 35, instrument.Guitar);
let musician2 = new Musician("shimon", 28, instrument.Drums);
let musician3 = new Musician("moshe", 60, instrument.None);
let musician4 = new Musician("ariel", 19, instrument.Bass);
musician1.play(songs[musician1.index]);
musician2.prev();
musician3.next();
musician4.play(songs[musician4.index]);
let band1 = new Band("rockstar", [musician1, musician2, musician3, musician4]);
band1.play(songs[band1.index]);
band1.prev();
band1.next();
