enum color {
    Red = "Red",
    Blue = "Blue",
    Yellow = "Yellow",
}


class Radio implements IPlay {
    _brand: string;
    _color: color;
    private _price: number; // Must be a positive number
    _songNamesArr: string[];
   _songNameIndex: number;

    constructor(brand: string, color: color, price: number) {
        this._brand = brand;
        this._color = color;
        this._price = price;

        this._songNamesArr = ["Shai is a nice guy", "Shimon champion", "Avyatar is a star", "King Moshiko", "David is a real King"];
        this._songNameIndex = 0;
    }


    play(song: string) {
        console.log(`The radio of brand ${this._brand}, which color is ${this._color} and which price is ${this._price} playing the song '${song}'.`);       
    }

    
    next(): void {
        if(this._songNameIndex < this._songNamesArr.length-1)  this._songNameIndex++;
        else this._songNameIndex = 0;
        console.log(`The radio of a brand ${this._brand} playing '${this._songNamesArr[this._songNameIndex]}' song`);
    }


    prev(): void {
        if(this._songNameIndex === 0)  this._songNameIndex = this._songNamesArr.length-1;
        else this._songNameIndex--;
        console.log(`The radio of a brand ${this._brand} playing '${this._songNamesArr[this._songNameIndex]}' song`);
    }    


    getPrice(): number {
        if(this._price > 0) return this._price;
        else return -1;
    }
}
