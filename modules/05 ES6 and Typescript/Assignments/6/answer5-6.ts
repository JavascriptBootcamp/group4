let songs: Array<string> = ["song1", "song2", "song3", "song4",], index = 0;
interface IPlay {
    play(song): void;
    next(): void;
    prev(): void;

}
enum Tools {
    Guitar = "Guitar",
    Drums = "Drums",
    Bass = "bass",
    None = "None"

}
class Musician implements IPlay {
    name: string;
    age: number;
    tool: Tools
    constructor(name: string, age: number, tool: Tools) {
        this.name = name;
        this.age = age;
        this.tool = tool;
    }


    play(song: any): void {
        console.log(`musician : ${this.name} is now playing ${song}`);

    }
    next(): void {
        if (songs[index + 1]) {
            index++;
        }
        else {
            index = 0;
        }
        console.log(`musician ${this.name} is now playing ${songs[index]}`);
    }
    prev(): void {
        if (songs[index - 1]) {
            index--;
        }
        else {
            index = 0;
        }
        console.log(`musician ${this.name} is now playing ${songs[index]}`);
    }

}
class Band implements IPlay {
    name: string;
    musicians: Musician[];

    constructor(name: string, musicians: Musician[]) {
        this.name = name;
        this.musicians = musicians;

    }


    play(song: any): void {
        console.log(`Band : ${this.name} is now playing ${song}`);

    }
    next(): void {
        if (songs[index + 1]) {
            index++;
        }
        else {
            index = 0;
        }
        console.log(`Band : ${this.name} is now playing ${songs[index]}`);
    }
    prev(): void {
        if (songs[index - 1]) {
            index--;
        }
        else {
            index = 0;
        }
        console.log(`Band : ${this.name} is now playing ${songs[index]}`);
    }

} enum color {
    red = "red",
    blue = "blue",
    yellow = "yellow",
}
class Radio implements IPlay {
    constructor(public brand: string, public color: color, public price: number) {
        this.brand = brand;
        this.color = color;
        this.price = price;
    }
    public play(song: string) {
        console.log(`radio : ${this.brand} is now playing ${song}`);
    }
    public next(): void {
        if (songs[index + 1]) {
            index++;
        }
        else {
            index = 0;
        }
        console.log(`radio ${this.brand} is now playing ${songs[index]}`);
    }
    public prev(): void {
        if (songs[index - 1]) {
            index--;
        }
        else {
            index = songs.length - 1;
        }
        console.log(`radio ${this.brand} is now playing ${songs[index]}`);
    }
}

let musician1: Musician = new Musician("gaby", 30, Tools.Guitar);
musician1.play(songs[2]);
musician1.next();
let radio1: Radio = new Radio("poineer", color.blue, 350);
radio1.play(songs[index]);
radio1.next();
radio1.prev();
radio1.prev();
let musician2: Musician = new Musician("yosi", 40, Tools.Drums);
let musician3: Musician = new Musician("maly", 37, Tools.None);
let musician4: Musician = new Musician("nissan", 46, Tools.Bass);
musician1.play(songs[index]);
musician2.prev();
musician3.next();
musician4.play(songs[index]);
let band1: Band = new Band("bandRock", [musician1, musician2, musician3, musician4]);
band1.play(songs[index]);
band1.prev();
band1.next();
