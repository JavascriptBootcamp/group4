interface IPlay {
    play(song: any): void;
    next(): void;
    prev(): void;
}

enum Instrument {
    guitar = 'Guitar',
    drums = 'Drums',
    bass = 'Bass',
    none = 'None'
}

enum Color {
    red = 'Red',
    blue = 'Blue',
    yellow = 'Yellow'
}

class Musician implements IPlay {
    name: string;
    age: number;
    instrument: Instrument;
    constructor(_name:string, _age:number, _instrument: Instrument) {
        this.name = _name;
        this.age = _age;
        this.instrument = _instrument;
    }
    play(song: any): void {
        console.log('name:', this.name);
        console.log('age:', this.age);
        console.log('instrument:', this.instrument);
        console.log('Playing', song);
    };
    next(): void {
        console.log('Moved to the next song');
    };
    prev(): void {
        console.log('Moved to the previous song');
    };
}

class Band implements IPlay {
    name: string;
    musicians: Musician [];
    constructor(_name:string,  _musicians: Musician []) {
        this.name = _name;
        this.musicians = _musicians;
    }
    play(song: any): void {
        console.log('band name:', this.name);
        this.musicians.forEach((member, index) => {
            console.log('member name' + (index+1) + ': ' + member.name);
        });
        console.log('Playing', song);
    };
    next(): void {
        console.log('Moved to the next song');
    };
    prev(): void {
        console.log('Moved to the previous song');
    };
}

class Radio implements IPlay {
    brand: string;
    color: Color;
    price: number;
    constructor(_brand:string,  _color: Color, _price: number) {
        this.brand = _brand;
        this.color = _color;
        this.price = Math.abs(_price);
    }
    play(song: any): void {
        console.log('brand:', this.brand);
        console.log('color:', this.color);
        console.log('price:', this.price);
        console.log('Playing', song);
    };
    next(): void {
        console.log('Moved to the next song');
    };
    prev(): void {
        console.log('Moved to the previous song');
    };
}

const radio = new Radio('Interscope', Color.blue, 22);
radio.play('Despacito');
radio.prev();
radio.next();
console.log('-------------------------------------------');
const eminem = new Musician('Eminem', 45, Instrument.none);
eminem.play('Not Afraid');
eminem.prev();
eminem.next();
console.log('-------------------------------------------');
const greenDay = new Band('Green Day', [new Musician('Billie Joe Armstrong', 48, Instrument.none), new Musician('Mike Dirnt', 48, Instrument.bass), new Musician('Tre Cool', 45, Instrument.drums), new Musician('Jason White', 44, Instrument.guitar)]);
greenDay.play('American Idiot');
greenDay.prev();
greenDay.next();