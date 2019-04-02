import { IPlay } from "./IPlay";
import { Instruments } from "./eInstruments";

 export class Musician implements IPlay
{
    name : string;
    age : number;
    instrument : Instruments;

    constructor(name: string, age: number, instrument : Instruments)
    {
        this.name = name;
        this.age = age;
        this.instrument = instrument;
    }

    play(song : string) : void{
        console.log(`Playing ${song}`);
    }
    next(): void{
        console.log("Moved next");
    }
    prev(): void {
        console.log("Moved prev");
    }
}
