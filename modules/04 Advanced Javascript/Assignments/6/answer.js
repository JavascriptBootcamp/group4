var instrument;
(function (instrument) {
    instrument["Guitar"] = "Guitar";
    instrument["Drums"] = "Drums";
    instrument["Bass"] = "Bass";
    instrument["None"] = "None";
})(instrument || (instrument = {}));
var colors;
(function (colors) {
    colors["Red"] = "Red";
    colors["Blue"] = "Blue";
    colors["Yellow"] = "Yellow";
})(colors || (colors = {}));
var Musician = /** @class */ (function () {
    function Musician(name, age, instrument) {
        this.name = name;
        this.age = age;
        this.instrument = instrument;
        this.name = name;
        this.age = age;
        this.instrument = instrument;
    }
    Musician.prototype.play = function (song) {
        console.log("Playing song " + song);
    };
    Musician.prototype.next = function () {
        if (songs.length - 1 === index)
            index = 0;
        else
            index++;
        this.play(songs[index]);
    };
    Musician.prototype.prev = function () {
        if (index === 0)
            index = songs.length - 1;
        else
            index--;
        this.play(songs[index]);
    };
    return Musician;
}());
var Band = /** @class */ (function () {
    function Band(name, musicians) {
        this.name = name;
        this.musicians = musicians;
        this.name = name;
        this.musicians = musicians;
    }
    Band.prototype.play = function (song) {
        console.log("Playing song " + song);
    };
    Band.prototype.next = function () {
        if (songs.length - 1 === index)
            index = 0;
        else
            index++;
        this.play(songs[index]);
    };
    Band.prototype.prev = function () {
        if (index === 0)
            index = songs.length - 1;
        else
            index--;
        this.play(songs[index]);
    };
    return Band;
}());
var Radio = /** @class */ (function () {
    function Radio(brand, color) {
        this.brand = brand;
        this.color = color;
        this.brand = brand;
        this.color = color;
    }
    Radio.prototype.setPrice = function (price) {
        if (price >= 0)
            this._price = price;
        else
            throw new Error("price must be positive");
    };
    Radio.prototype.play = function (song) {
        console.log("Playing song " + song);
    };
    Radio.prototype.next = function () {
        if (songs.length - 1 === index)
            index = 0;
        else
            index++;
        this.play(songs[index]);
    };
    Radio.prototype.prev = function () {
        if (index === 0)
            index = songs.length - 1;
        else
            index--;
        this.play(songs[index]);
    };
    return Radio;
}());
//Songs
var songs = ["song1", "song2", "song3", "song4", "song5"];
var index = 0;
//Radio instance check
var radio = new Radio("Boose", colors.Blue);
radio.setPrice(100);
radio.play(songs[index]);
radio.prev();
radio.next();
//Musician instance check
var musician1 = new Musician("Motsart", 18, instrument.Guitar);
musician1.prev();
musician1.next();
//Band instance check
var musician2 = new Musician("Natan Goshen", 18, instrument.Bass);
var musician3 = new Musician("Omer Adam", 18, instrument.Drums);
var musician4 = new Musician("Keren Pelles", 18, instrument.None);
var musiciansBand = [musician1, musician2, musician3, musician4];
var band = new Band("high5", musiciansBand);
band.prev();
band.next();
