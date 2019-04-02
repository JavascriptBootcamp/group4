import { Band } from "./Band";
import { Musician } from "./Musician";
import { Radio } from "./Radio";
import { Colors } from "./eColors";
import { Instruments } from "./eInstruments";


let radio = new Radio("Casio" , Colors.Red, 100);
radio.play("Baasa Sababa");
radio.prev();
radio.next();

let musician = new Musician("Avicii", 32, Instruments.Guitar);
musician.play("X You");
musician.prev();
musician.next();

let musiciansArr : Musician[] = [];
musiciansArr.push(new Musician("Freddie", 58, Instruments.Drums));
musiciansArr.push(new Musician("Jeff", 60, Instruments.Guitar));
musiciansArr.push(new Musician("Jack", 55,Instruments.None));
musiciansArr.push(new Musician("Peter", 45,Instruments.Bass));


let band = new Band("Queen", musiciansArr);

musiciansArr.forEach((musician) => musician.play(`Show must go on with my ${musician.instrument}`));
band.play("Mama");
band.prev();
band.next();
