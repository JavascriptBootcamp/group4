interface IPlay {

    play(song: Song): void;
    next(): void;
    prev(): void;
}
interface Song {

}
enum Instrument {
    Guitar = "Guitar",
    Drums = "Drums",
    Organ = "Organ",
    Violinist = "Violinist",
    None = "None"
}

enum Color {
    Red = "Red",
    Blue = "Blue",
    Yellow = "Yellow"
}
class Musician implements IPlay {

    private _name: string;
    private _age: number;
    private _instrument: Instrument;

    constructor(name: string, age: number, instrument: Instrument) {
        this._name = name;
        this._age = age;
        this._instrument = instrument;
    }

    public play(song: Song): void {
        console.log(song);
    }
    public next(): void { }
    public prev(): void { }
}

class Band implements IPlay {

    private _name: string;
    private _musicians: Musician[];
    constructor(name: string, musicians: Musician[]) {
        this._name = name;
        this._musicians = [...musicians];
    }
    public play(song: Song): void {
        console.log(song);
    }
    public next(): void { }
    public prev(): void { }
}

class Radio implements IPlay {
    private _brand: string;
    private _color: Color;
    private _price: number;

    constructor(brand: string, price: number, color: Color) {
        this._brand = brand;
        this._color = color;
        this._price = price;
    }

    public play(song: Song): void {
        console.log(song);
    }
    public next(): void { }
    public prev(): void { }
}

const radio: Radio = new Radio("Group4", 100, Color.Blue);
radio.play("song");
radio.next();
radio.prev();

const musician1: Musician = new Musician("Eyal", 48, Instrument.None);
musician1.play("song");
musician1.next();
musician1.prev();

const musician2: Musician = new Musician("Adi", 35, Instrument.Organ);
const musician3: Musician = new Musician("Ronius", 30, Instrument.Violinist);
const musician4: Musician = new Musician("Omri", 30, Instrument.Guitar);

const band: Band = new Band("Eyal Golan", [musician1, musician2, musician3, musician4]);
band.play("song");
band.next();
band.prev();