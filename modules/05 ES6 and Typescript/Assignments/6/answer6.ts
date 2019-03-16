interface IPlay {
    play(song: string): void;
    next(): void;
    prev(): void;
}

enum instruments {
    Guitar = "Guitar",
    Drums = "Drums",
    Bass = "Bass",
    None = "None"
}

enum colors {
    Red = "Red",
    Blue = "Blue",
    Yellow = "Yellow"
}


class Musician implements IPlay {

    name: string;
    age: number;
    instrument: instruments;

    constructor(name: string, age: number, instrument: instruments) {
        this.name = name;
        this.age = age;
        this.instrument = instrument;
    }

    play(song: string): void {
        console.log(`Musician ${this.name} plays ${song} which is a song`);
    }

    next(): void {
        console.log(`Musician ${this.name} moves to the next song`);
    }

    prev(): void {
        console.log(`Musician ${this.name} moves to the previous song`);
    }




}

class Band implements IPlay {

    name: string;
    musicians: Musician[];

    constructor(name: string,...args:Musician[]) {
        this.name = name;
        this.musicians = args;
    }

    play(song: string): void {
        console.log(`The Band ${this.name} plays a song`);
    }

    next(): void {
        console.log(`The Band ${this.name} moves to the next song`);
    }

    prev(): void {
        console.log(`The Band ${this.name} moves to the previous song`);
    }
}

class Radio implements IPlay {

    band: string;
    color: colors;
    price: number;

    constructor(band: string, color: colors, price: number) {
        this.band = band;
        this.color = color;
        this.price = this.inforcePos(price);
    }

    private inforcePos(price: number): number {
        if (price > 0)
            return price;
        else
            return 1;
    }

    play(song: string): void {
        console.log(`The Radio ${this.band} plays a song`);
    }

    next(): void {
        console.log(`The Radio ${this.band} moves to the next song`);
    }

    prev(): void {
        console.log(`The Band ${this.band} moves to the previous song`);
    }
}

let radio = new Radio("Reshet Beit",colors.Red,34);
radio.play("Pretty Woman");
radio.prev();
radio.next();

let musician = new Musician("Amitay",46,instruments.Bass);
musician.play("Hotel California");
musician.prev();
musician.next();

//create a Band of 4 musicians. each musician plays a different instruments. play a song. move to the previous song. move to the next song
let band = new Band("Eagles",new Musician("Musician1",20,instruments.Bass),new Musician("Musician2",30,instruments.Drums),new Musician("Musician3",40,instruments.Guitar),new Musician("Musician4",50,instruments.None))
band.play("Back to life");
band.prev();
band.next();

