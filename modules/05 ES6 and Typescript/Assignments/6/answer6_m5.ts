//Answer to Assignments 6  module 05 ES6 and TypeScript

interface Iplay {

    play(song:string):void;
    next():string;
    prev():string;
}

enum Instruments {
    Guitar,
    Drums,
    Bass,
    None,
}

enum Colors {
    Red,
    Blue,
    Yellow,
}

class Musician implements Iplay {
     
    name:string;
    age:number;
    instruments:Instruments;

    constructor(name:string,
                age:number,
                instruments:Instruments){

                    this.name = name;
                    this.age = age;
                    this.instruments = instruments;
    }


    play(song:string):void{
          console.log("Musician plan "+ song)
    }

    next():string{

        return "next Musician song"
    }

    prev():string {

    return "prev Musician song"
    }

}

class Band implements Iplay {
 
    name:string;
    musicians:Musician[];
    
    constructor(name:string,musicains:Musician[]){
       
        this.name = name;
        this.musicians = musicains;
    
    }
    play(song:string):void{

    }

    next():string{

        return "next band song"
    }

    prev():string {

    return "prev band song"
    }

}


class Radio implements Iplay {

    brand:string;
    colors:Colors;
    price:number;

    play(song:string):void{
        console.log(`you play ${song} on radio`);
    }

    next():string{

        return "Next Song In Radio";
    }

    prev():string {

    return "Prev Song in Radio";
    }

}

const radio1 = new Radio();
radio1.play("song1");
radio1.next();
radio1.prev();

const musicain1 = new Musician("musician1",20 ,Instruments.Bass);
const musicain2 = new Musician("musician2",21 ,Instruments.Drums);
const musicain3 = new Musician("musician3",23 ,Instruments.Guitar);
const musicain4 = new Musician("musician4",23 ,Instruments.None);



musicain1.play("song2");
musicain1.next();
musicain1.prev();

const band1 = new Band("band1",
       [musicain1,musicain2,musicain3,musicain4]);

band1.play("song3");
band1.prev();
band1.next();