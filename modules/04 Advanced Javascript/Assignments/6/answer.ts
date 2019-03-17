interface IPlay{
    play(song:string):void;
    next():void;
    prev():void;
}
enum instrument{
    Guitar = "Guitar",
    Drums = "Drums",
    Bass = "Bass",
    None = "None"
}
enum colors{
    Red = "Red",
    Blue = "Blue",
    Yellow = "Yellow"
}
class Musician implements IPlay{
    constructor(public name:string,public age:number,public instrument:instrument){
        this.name = name;
        this.age = age;
        this.instrument = instrument;
    }
    play(song: string): void {
        console.log(`Playing song ${song}`);
    }    
    next(): void {
        if(songs.length-1===index)
            index=0;
        else
            index++;
        this.play(songs[index]);
    }
    prev(): void {
        if(index===0)
        index=songs.length-1;
        else
            index--;
        this.play(songs[index]);
    }
}

class Band implements IPlay{
    constructor(public name:string,public musicians:Musician[]){
        this.name = name;
        this.musicians = musicians;
    }
    play(song: string): void {
        console.log(`Playing song ${song}`);
    }    
    next(): void {
        if(songs.length-1===index)
            index=0;
        else
            index++;
        this.play(songs[index]);
    }
    prev(): void {
        if(index===0)
        index=songs.length-1;
        else
            index--;
        this.play(songs[index]);
    }
}

class Radio implements IPlay{
    _price:number;
    constructor(public brand:string,public color:colors){
        this.brand = brand;
        this.color = color;
    }
    setPrice(price:number){
        if(price>=0)
            this._price=price;
        else
            throw new Error("price must be positive");
    }
    play(song: string): void {
        console.log(`Playing song ${song}`);
    }    
    next(): void {
        if(songs.length-1===index)
            index=0;
        else
            index++;
        this.play(songs[index]);
    }
    prev(): void {
        if(index===0)
        index=songs.length-1;
        else
            index--;
        this.play(songs[index]);
    }
}

//Songs
let songs:string[] =["song1","song2","song3","song4","song5"];
let index=0;

//Radio instance check
let radio:Radio=new Radio("Boose",colors.Blue);
radio.setPrice(100);
radio.play(songs[index]);
radio.prev();
radio.next();

//Musician instance check
let musician1:Musician=new Musician("Motsart",18,instrument.Guitar);
musician1.play(songs[index]);
musician1.prev();
musician1.next();

//Band instance check
let musician2:Musician=new Musician("Natan Goshen",18,instrument.Bass);
let musician3:Musician=new Musician("Omer Adam",18,instrument.Drums);
let musician4:Musician=new Musician("Keren Pelles",18,instrument.None);
let musiciansBand=[musician1,musician2,musician3,musician4];
let band:Band=new Band("high5",musiciansBand);
band.play(songs[index]);
band.prev();
band.next();
