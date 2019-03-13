var application;
(function (application) {
    class Application {
        constructor() {
            let radioObj = new Radio("Sony", color.Yellow, 5000);
            radioObj.play(radioObj._songNamesArr[radioObj._songNameIndex]);
            radioObj.prev();
            radioObj.next();
            console.log("\n\n");
            let musicianObj = new Musician("David", 20, instrument.Drums);
            musicianObj.play(musicianObj._songNamesArr[musicianObj._songNameIndex]);
            musicianObj.prev();
            musicianObj.next();
            console.log("\n\n");
            let musician2Obj = new Musician("Hugo", 20, instrument.Bass);
            let musician3Obj = new Musician("Zubo", 30, instrument.Guitar);
            let musician4Obj = new Musician("Guru", 40, instrument.None);
            let bandObj = new Band("Hands Up", [musicianObj, musician2Obj, musician3Obj, musician4Obj]);
            bandObj.play(bandObj._songNamesArr[bandObj._songNameIndex]);
            bandObj.prev();
            bandObj.next();
        }
    }
    application.Application = Application;
})(application || (application = {}));
window.addEventListener('DOMContentLoaded', () => {
    new application.Application();
});
class Band {
    constructor(name, musicians) {
        this._name = name;
        this._musicians = musicians;
        this._songNamesArr = ["Shai is a nice guy", "Shimon champion", "Avyatar is a star", "King Moshiko", "David is a real King"];
        this._songNameIndex = 0;
    }
    play(song) {
        console.log(`The band '${this._name}' playing the '${song}' song `);
    }
    next() {
        if (this._songNameIndex < this._songNamesArr.length - 1)
            this._songNameIndex++;
        else
            this._songNameIndex = 0;
        console.log(`'${this._name}' band playing '${this._songNamesArr[this._songNameIndex]}' song`);
    }
    prev() {
        if (this._songNameIndex === 0)
            this._songNameIndex = this._songNamesArr.length - 1;
        else
            this._songNameIndex--;
        console.log(`'${this._name}' band playing '${this._songNamesArr[this._songNameIndex]}' song`);
    }
}
var instrument;
(function (instrument) {
    instrument["Guitar"] = "Guitar";
    instrument["Drums"] = "Drums";
    instrument["Bass"] = "Bass";
    instrument["None"] = "None";
})(instrument || (instrument = {}));
class Musician {
    constructor(name, age, instrument) {
        this._name = name;
        this._age = age;
        this._instrument = instrument;
        this._songNamesArr = ["Shai is a nice guy", "Shimon champion", "Avyatar is a star", "King Moshiko", "David is a real King"];
        this._songNameIndex = 0;
    }
    play(song) {
        console.log(`${this._name} is a ${this._age} years old musician, playing '${song}' song on ${this._instrument}`);
    }
    next() {
        if (this._songNameIndex < this._songNamesArr.length - 1)
            this._songNameIndex++;
        else
            this._songNameIndex = 0;
        console.log(`The musician ${this._name} playing '${this._songNamesArr[this._songNameIndex]}' song`);
    }
    prev() {
        if (this._songNameIndex === 0)
            this._songNameIndex = this._songNamesArr.length - 1;
        else
            this._songNameIndex--;
        console.log(`The musician ${this._name} playing '${this._songNamesArr[this._songNameIndex]}' song`);
    }
}
var color;
(function (color) {
    color["Red"] = "Red";
    color["Blue"] = "Blue";
    color["Yellow"] = "Yellow";
})(color || (color = {}));
class Radio {
    constructor(brand, color, price) {
        this._brand = brand;
        this._color = color;
        this._price = price;
        this._songNamesArr = ["Shai is a nice guy", "Shimon champion", "Avyatar is a star", "King Moshiko", "David is a real King"];
        this._songNameIndex = 0;
    }
    play(song) {
        console.log(`The radio of brand ${this._brand}, which color is ${this._color} and which price is ${this._price} playing the song '${song}'.`);
    }
    next() {
        if (this._songNameIndex < this._songNamesArr.length - 1)
            this._songNameIndex++;
        else
            this._songNameIndex = 0;
        console.log(`The radio of a brand ${this._brand} playing '${this._songNamesArr[this._songNameIndex]}' song`);
    }
    prev() {
        if (this._songNameIndex === 0)
            this._songNameIndex = this._songNamesArr.length - 1;
        else
            this._songNameIndex--;
        console.log(`The radio of a brand ${this._brand} playing '${this._songNamesArr[this._songNameIndex]}' song`);
    }
    getPrice() {
        if (this._price > 0)
            return this._price;
        else
            return -1;
    }
}
