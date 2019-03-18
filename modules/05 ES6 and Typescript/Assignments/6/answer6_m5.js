//Answer to Assignments 6  module 05 ES6 and TypeScript
var Instruments;
(function (Instruments) {
    Instruments[Instruments["Guitar"] = 0] = "Guitar";
    Instruments[Instruments["Drums"] = 1] = "Drums";
    Instruments[Instruments["Bass"] = 2] = "Bass";
    Instruments[Instruments["None"] = 3] = "None";
})(Instruments || (Instruments = {}));
var Colors;
(function (Colors) {
    Colors[Colors["Red"] = 0] = "Red";
    Colors[Colors["Blue"] = 1] = "Blue";
    Colors[Colors["Yellow"] = 2] = "Yellow";
})(Colors || (Colors = {}));
var Musician = /** @class */ (function () {
    function Musician(name, age, instruments) {
        this.name = name;
        this.age = age;
        this.instruments = instruments;
    }
    Musician.prototype.play = function (song) {
        console.log("Musician plan " + song);
    };
    Musician.prototype.next = function () {
        return "next Musician song";
    };
    Musician.prototype.prev = function () {
        return "prev Musician song";
    };
    return Musician;
}());
var Band = /** @class */ (function () {
    function Band(name, musicains) {
        this.name = name;
        this.musicians = musicains;
    }
    Band.prototype.play = function (song) {
    };
    Band.prototype.next = function () {
        return "next band song";
    };
    Band.prototype.prev = function () {
        return "prev band song";
    };
    return Band;
}());
var Radio = /** @class */ (function () {
    function Radio() {
    }
    Radio.prototype.play = function (song) {
        console.log("you play " + song + " on radio");
    };
    Radio.prototype.next = function () {
        return "Next Song In Radio";
    };
    Radio.prototype.prev = function () {
        return "Prev Song in Radio";
    };
    return Radio;
}());
var radio1 = new Radio();
radio1.play("song1");
radio1.next();
radio1.prev();
var musicain1 = new Musician("musician1", 20, Instruments.Bass);
var musicain2 = new Musician("musician2", 21, Instruments.Drums);
var musicain3 = new Musician("musician3", 23, Instruments.Guitar);
var musicain4 = new Musician("musician4", 23, Instruments.None);
musicain1.play("song2");
musicain1.next();
musicain1.prev();
var band1 = new Band("band1", [musicain1, musicain2, musicain3, musicain4]);
band1.play("song3");
band1.prev();
band1.next();
