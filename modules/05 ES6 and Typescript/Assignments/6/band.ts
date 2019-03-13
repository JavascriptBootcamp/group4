class Band implements IPlay {
    _name: string;
   _musicians: Musician[];
   _songNamesArr: string[];
   _songNameIndex: number;


    constructor(name, musicians) {
        this._name = name;
        this._musicians = musicians;

        this._songNamesArr = ["Shai is a nice guy", "Shimon champion", "Avyatar is a star", "King Moshiko", "David is a real King"];
        this._songNameIndex = 0;
    }


    play(song: string) {
        console.log(`The band '${this._name}' playing the '${song}' song `);
    }


    next(): void {
        if(this._songNameIndex < this._songNamesArr.length-1)  this._songNameIndex++;
        else this._songNameIndex = 0;
        console.log(`'${this._name}' band playing '${this._songNamesArr[this._songNameIndex]}' song`);
    }


    prev(): void {
        if(this._songNameIndex === 0)  this._songNameIndex = this._songNamesArr.length-1;
        else this._songNameIndex--;
        console.log(`'${this._name}' band playing '${this._songNamesArr[this._songNameIndex]}' song`);
    }    
}
