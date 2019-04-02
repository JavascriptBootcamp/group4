import { Musician } from "./Musician"
import { IPlay } from "./IPlay"


export class Band implements IPlay{

    name : string;
    musicians : Musician[];

    constructor(name: string, musicians : Musician[])
    {
        this.name = name;
        this.musicians = musicians;
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
