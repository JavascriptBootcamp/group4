var Instrument;
(function (Instrument) {
    Instrument["Guitar"] = "Guitar";
    Instrument["Drums"] = "Drums";
    Instrument["Bass"] = "Bass";
    Instrument["None"] = "None";
})(Instrument || (Instrument = {}));
var Colors;
(function (Colors) {
    Colors["Red"] = "Red";
    Colors["Blue"] = "Blue";
    Colors["Yellow"] = "Yellow";
})(Colors || (Colors = {}));
var Musician = /** @class */ (function () {
    function Musician(name, age, instrument) {
        this.name = name;
        this.age = age;
        this.instrument = instrument;
    }
    Musician.prototype.play = function (song) { console.log("play a song " + song); };
    Musician.prototype.next = function () { console.log("musician - move to the next song"); };
    Musician.prototype.prev = function () { console.log("musician - move to the previous song"); };
    return Musician;
}());
var Band = /** @class */ (function () {
    function Band(name, musicians) {
        this.name = name;
        this.musicians = musicians;
    }
    Band.prototype.play = function (song) { console.log("play a song " + song); };
    Band.prototype.next = function () { console.log("band - move to the next song"); };
    Band.prototype.prev = function () { console.log("band - move to the previous song"); };
    return Band;
}());
var Radio = /** @class */ (function () {
    function Radio(brand, color, price) {
        this.brand = brand;
        this.color = color;
        this.setPrice(price);
    }
    Radio.prototype.setPrice = function (price) {
        if (price > 0) {
            this.price = price;
        }
    };
    Radio.prototype.play = function (song) { console.log("play a song " + song); };
    Radio.prototype.next = function () { console.log("radio - move to the next song"); };
    Radio.prototype.prev = function () { console.log("radio - move to the previous song"); };
    return Radio;
}());
var radio = new Radio("brand1", Colors.Red, 100);
radio.play("radio-songgg");
radio.next();
radio.prev();
var musician1 = new Musician("musician-name1", 30, Instrument.Drums);
radio.play("musician1-song");
radio.next();
radio.prev();
var musician2 = new Musician("musician-name2", 25, Instrument.Bass);
radio.play("musician2-song");
radio.next();
radio.prev();
var musician3 = new Musician("musician-name3", 35, Instrument.Guitar);
radio.play("musician3-song");
radio.next();
radio.prev();
var musician4 = new Musician("musician-name4", 40, Instrument.None);
radio.play("musician4-song");
radio.next();
radio.prev();
var musicians = [musician1, musician2, musician3, musician4];
var band = new Band("band-name", musicians);
band.play("band-song");
band.next();
band.prev();
