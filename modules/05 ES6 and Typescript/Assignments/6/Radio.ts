import { Colors } from "./eColors";
import { IPlay } from "./IPlay";

export class Radio implements IPlay{
    brand : string;
    color : Colors;
    price : number;

    constructor(brand:string, color : Colors, price: number)
    {
        this.brand = brand;
        this.color = color;
        this.price = price > 0 ? price : 1;
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
