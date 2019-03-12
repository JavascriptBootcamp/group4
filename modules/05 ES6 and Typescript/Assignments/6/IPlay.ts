interface IPlay{

play:(song:string)=>void,
next:()=>string | void,
prev:()=>string | void
}

enum Instrument{
    Guitar="Guitar",
    Drums="Drums",
    Bass="Bass",
    None="None"
}

enum Color{
    Red="Red",
    Blue="Blue",
    Yellow="Yellow"
}

const songs:Array<string> =  ["Song_1","Song_2","Song_3","Song_4","Song_5"];
let index:number = 0;

class Musician implements IPlay{
     name:string;
     age:number ;
     instrument:string;
    constructor(_name:string,_age:number,_instrument:string){
        this.name = _name;
        this.age = _age;
        this.instrument = _instrument
    }

   public play(song:string):void{
      
      console.log(`The song ${song} is playing now,
      the Musician name is ${this.name},
      his age is ${this.age} and he is playing the song with ${this.instrument}`);

    }

    
    public next():string | void{

        if(songs[++index]){
            index++;
        }
        else{
            index = 0;
        }

        console.log(`The next song is ${songs[index]}.`)
    }


    public prev():string | void{

        if(songs[--index]){
            index--;
        }
        else{
            index = songs.length - 1;
        }

        console.log(`The previous song is ${songs[index]}.`);    

    }
}



class Band implements IPlay{

private name:string;
private musicians : Array<Musician>

constructor(_name:string,_musicians:Array<Musician>){
this.name = _name;
this.musicians = _musicians;
}

public play(song:string):void{
    console.log(`The song ${song} is playing now,
    the Band's name is ${this.name}
    the Musician's details are :`);

    for(let i in this.musicians){   
    console.log(`${this.musicians[i].name},age:${this.musicians[i].age},instrument:${this.musicians[i].instrument}`);  
    }
}    


public next():string|void{

    if(songs[++index]){
        index++;
    }
    else{
        index = 0;
    }

    console.log(`The next song is ${songs[index]}.`);
}


public prev():string|void{

    if(songs[--index]){
        index--;
    }
    else{
        index = songs.length - 1;
    }

    console.log(`The previous song is ${songs[index]}.`);

}

}


class Radio implements IPlay{

private brand :string;
private color :string;
private price : number;

constructor(_brand:string,_color:string,_price:number){
    this.brand = _brand;
    this.color = _color;
    this.price = _price;
}

public play(song:string):void{
    console.log(`The song ${song} is playing now,
    the brand's name is ${this.brand}
    the color is ${this.color}
    the price is ${this.price}`);
}


public next():string|void{

    if(songs[++index]){
        index++;
    }
    else{
        index = 0;
    }

    console.log(`The next song is ${songs[index]}.`)
}


public prev():string|void{

    if(songs[--index]){
        index--;
    }
    else{
        index = songs.length - 1;
    }

    console.log(`The previous song is ${songs[index]}.`);

}

}


const radio:Radio = new Radio ("fvf",Color.Blue,200);
radio.play(songs[index]);
radio.prev();
radio.next();

console.log('-------------------------------------------------------');

const musician:Musician  = new Musician  ("someOne",28,Instrument.Bass);
musician.play(songs[index]);
musician.prev();
musician.next();

console.log('-------------------------------------------------------');

const MusiciansArr:Array<Musician> = [];
const musician_1:Musician = new Musician("someOne_1",28,Instrument.Bass);
const musician_2:Musician = new Musician("someOne_2",26,Instrument.Drums);
const musician_3:Musician = new Musician("someOne_3",24,Instrument.Guitar);
const musician_4:Musician = new Musician("someOne_4",22,Instrument.None);

MusiciansArr.push(musician_1);
MusiciansArr.push(musician_2);
MusiciansArr.push(musician_3);
MusiciansArr.push(musician_4);

const band:Band = new Band("some_Band",MusiciansArr);
band.play(songs[index]);
band.prev();
band.next();