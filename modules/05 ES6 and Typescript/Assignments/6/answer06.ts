interface IPlay {
    play: (song: string) => void;
    next: () => void;
    prev: () => void;
}

enum eInstrument {
    Guitar = "GUITAR",
    Drums = "DRUMS",
    Bass = "BASS",
    None = "NONE"
}

enum eColor {
    Red = "RED",
    Blue = "BLUE",
    Yellow = "YELLOW"
}

class Musician implements IPlay {
    name: string;
    age: number;
    instrument: eInstrument;

    constructor(name: string, age: number, instrument: eInstrument) {
        this.name = name;
        this.age = age;
        this.instrument = instrument;
    }

    play = (song: string) => { console.log(`Musician Play Song: ${song}`) };
    next = () => console.log(`Musician Play Next`);
    prev = () => console.log(`Musician Play Previous`);
}

class Band implements IPlay {
    name: string;
    musicians: Musician[];

    constructor(name: string, musicians: Musician[]) {
        this.name = name;
        this.musicians = musicians;
    }

    play = (song: string) => console.log(`Band Play Song: ${song}`);
    next = () => console.log(`Band Play Next`);
    prev = () => console.log(`Band Play Previous`);
}

class Radio implements IPlay {
    brand: string;
    color: eColor;
    price: number;

    constructor(brand: string, color: eColor, price: number) {
        this.brand = brand;
        this.color = color;
        this.price = price;
    }

    play = (song: string) => console.log(`Radio Play Song: ${song}`);
    next = () => console.log(`Radio Play Next`);
    prev = () => console.log(`Radio Play Previous`);
}

let radio = new Radio(`spotify`, eColor.Blue, 100);
radio.play(`Hello`);
radio.prev();
radio.next();

let musician1 = new Musician(`Bobo`, 35, eInstrument.Guitar);
musician1.play(`World`);
musician1.prev();
musician1.next();

let musician2 = new Musician(`Dodo`, 29, eInstrument.Drums);
let musician3 = new Musician(`Koko`, 29, eInstrument.None);
let musician4 = new Musician(`Zozo`, 29, eInstrument.Bass);

let band = new Band(`SomeBand`, [musician1, musician2, musician3, musician4]);
band.play(`Hello World`);
band.prev();
band.next();