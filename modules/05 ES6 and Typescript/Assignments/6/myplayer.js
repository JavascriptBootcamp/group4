"use strict";
exports.__esModule = true;
var Musician = /** @class */ (function () {
    function Musician(name, age, instruments) {
        this._name = name;
        this._age = age;
        this._instrument = instruments;
    }
    Musician.prototype.play = function (song) {
        console.log(song + " is playing now");
    };
    Musician.prototype.next = function () {
    };
    Musician.prototype.prev = function () {
    };
    return Musician;
}());
exports.Musician = Musician;
var Band = /** @class */ (function () {
    function Band(name, musician) {
        this._name = name;
        this._musicians = musician;
    }
    Band.prototype.play = function (song) {
        console.log(song + " is playing now");
    };
    Band.prototype.next = function () {
    };
    Band.prototype.prev = function () {
    };
    return Band;
}());
exports.Band = Band;
var Radio = /** @class */ (function () {
    function Radio(brand, color, price) {
        this._brand = brand;
        this._color = color;
        this._price = price;
    }
    Radio.prototype.play = function (song) {
        console.log(song + " is playing now");
    };
    Radio.prototype.next = function () {
    };
    Radio.prototype.prev = function () {
        console.log(module.songs[module.index - 1] + " is playing now");
    };
    return Radio;
}());
exports.Radio = Radio;
var instrument;
(function (instrument) {
    instrument["Guitar"] = "Guitar";
    instrument["Drums"] = "Drums";
    instrument["Bass"] = "Bass";
    instrument["None"] = "None";
})(instrument = exports.instrument || (exports.instrument = {}));
var color;
(function (color) {
    color["red"] = "red";
    color["blue"] = "blue";
    color["yellow"] = "yellow";
})(color = exports.color || (exports.color = {}));
exports.songs = ["song1", "song2", "song3", "song4",], exports.index = 0;
var module = require("./myplayer");
var radio1 = new module.Radio("poineer", color.blue, 350);
radio1.play(module.songs[module.index]);
// radio1.prev();
// radio1.next();
var musician1 = new module.Musician("gaby", 30, instrument.Guitar);
var musician2 = new module.Musician("yosi", 40, instrument.Drums);
var musician3 = new module.Musician("maly", 37, instrument.None);
var musician4 = new module.Musician("nissan", 46, instrument.Bass);
musician1.play(module.songs[1]);
//musician1.prev();
// musician1.next();
musician2.play(module.songs[2]);
var band1 = new module.Band("bandRock", [musician1, musician2, musician3, musician4]);
//console.log(band1._musicians);
band1.play(module.songs[3]);
//band1.prev();
// band1.next();
