interface IPlay {
    play(song: string): void;
    next(): void;
    prev(): void;
}

enum Instrument {
    Guitar = "Guitar",
    Drums = "Drums",
    Bass = "Bass",
    None = "None"
}

enum Colors {
    Red = "Red",
    Blue = "Blue",
    Yellow = "Yellow"
}

class Musician implements IPlay {
    private name: string;
    private age: number;
    private instrument: Instrument;
    constructor(name: string, age: number, instrument: Instrument) {
        this.name = name;
        this.age = age;
        this.instrument = instrument;
    }
    public play(song: string): void { console.log(`play a song ${song}`); }
    public next(): void { console.log(`musician - move to the next song`); }
    public prev(): void { console.log(`musician - move to the previous song`); }
}

class Band implements IPlay {
    private name: string;
    private musicians: Array<Musician>;
    constructor(name: string, musicians: Array<Musician>) {
        this.name = name;
        this.musicians = musicians;
    }
    public play(song: string): void { console.log(`play a song ${song}`); }
    public next(): void { console.log(`band - move to the next song`); }
    public prev(): void { console.log(`band - move to the previous song`); }
}

class Radio implements IPlay {
    private brand: string;
    private color: Colors;
    private price: number;
    constructor(brand: string, color: Colors, price: number) {
        this.brand = brand;
        this.color = color;
        this.setPrice(price);
    }
    public setPrice(price: number) {
        if (price > 0) {
            this.price = price;
        }
    }
    public play(song: string): void { console.log(`play a song ${song}`); }
    public next(): void { console.log(`radio - move to the next song`); }
    public prev(): void { console.log(`radio - move to the previous song`); }
}

let radio: Radio = new Radio("brand1", Colors.Red, 100);
radio.play("radio-songgg");
radio.next();
radio.prev();

let musician1: Musician = new Musician("musician-name1", 30, Instrument.Drums);
radio.play("musician1-song");
radio.next();
radio.prev();

let musician2: Musician = new Musician("musician-name2", 25, Instrument.Bass);
radio.play("musician2-song");
radio.next();
radio.prev();

let musician3: Musician = new Musician("musician-name3", 35, Instrument.Guitar);
radio.play("musician3-song");
radio.next();
radio.prev();

let musician4: Musician = new Musician("musician-name4", 40, Instrument.None);
radio.play("musician4-song");
radio.next();
radio.prev();

const musicians: Array<Musician> = [musician1, musician2, musician3, musician4];
let band: Band = new Band("band-name", musicians);
band.play("band-song");
band.next();
band.prev();
