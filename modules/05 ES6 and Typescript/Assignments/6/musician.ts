enum instrument {
    Guitar = "Guitar",
    Drums = "Drums",
    Bass = "Bass",
    None = "None"
}

//import {instrument} from './musician'

class Musician implements IPlay {
    _name: string;
    _age: number;
    _instrument: instrument;
    _songNamesArr: string[];
    _songNameIndex: number;
    
    constructor(name: string, age: number, instrument: instrument) {
        this._name = name;
        this._age = age;
        this._instrument = instrument;

        this._songNamesArr = ["Shai is a nice guy", "Shimon champion", "Avyatar is a star", "King Moshiko", "David is a real King"];
        this._songNameIndex = 0;
    }

    play(song: string): void {
        console.log(`${this._name} is a ${this._age} years old musician, playing '${song}' song on ${this._instrument}`);       
    }


    next(): void {
        if(this._songNameIndex < this._songNamesArr.length-1)  this._songNameIndex++;
        else this._songNameIndex = 0;
        console.log(`The musician ${this._name} playing '${this._songNamesArr[this._songNameIndex]}' song`);
    }


    prev(): void {
        if(this._songNameIndex === 0)  this._songNameIndex = this._songNamesArr.length-1;
        else this._songNameIndex--;
        console.log(`The musician ${this._name} playing '${this._songNamesArr[this._songNameIndex]}' song`);
    }    
}
