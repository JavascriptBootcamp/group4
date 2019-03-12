"use strict";
exports.__esModule = true;
var Musician = /** @class */ (function () {
    function Musician(name, age, instruments) {
        this._name = name;
        this._age = age;
        this._instrument = instruments;
    }
    Musician.prototype.play = function (song) {
        console.log("musician : " + this._name + " is now playing " + song);
    };
    Musician.prototype.next = function () {
        if (songs[index + 1]) {
            index++;
        }
        else {
            index = 0;
        }
        console.log("musician : " + this._name + " is now playing " + songs[index]);
    };
    Musician.prototype.prev = function () {
        if (songs[index - 1]) {
            index--;
        }
        else {
            index = songs.length - 1;
        }
        console.log("musician : " + this._name + " is now playing " + songs[index]);
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
        console.log("band : " + this._name + " is now playing " + song);
    };
    Band.prototype.next = function () {
        if (songs[index + 1]) {
            index++;
        }
        else {
            index = 0;
        }
        console.log("band : " + this._name + " is now playing " + songs[index]);
    };
    Band.prototype.prev = function () {
        if (songs[index - 1]) {
            index--;
        }
        else {
            index = songs.length - 1;
        }
        console.log("band : " + this._name + " is now playing " + songs[index]);
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
        console.log("radio : " + this._brand + " is now playing " + song);
    };
    Radio.prototype.next = function () {
        if (songs[index + 1]) {
            index++;
        }
        else {
            index = 0;
        }
        console.log("radio : " + this._brand + " is now playing " + songs[index]);
    };
    Radio.prototype.prev = function () {
        if (songs[index - 1]) {
            index--;
        }
        else {
            index = songs.length - 1;
        }
        console.log("radio : " + this._brand + " is now playing " + songs[index]);
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
var songs = ["song1", "song2", "song3", "song4",], index = 0;
var module = require("./myplayer");
var radio1 = new module.Radio("poineer", color.blue, 350);
radio1.play(songs[index]);
radio1.next();
radio1.next();
radio1.prev();
var musician1 = new module.Musician("gaby", 30, instrument.Guitar);
var musician2 = new module.Musician("yosi", 40, instrument.Drums);
var musician3 = new module.Musician("maly", 37, instrument.None);
var musician4 = new module.Musician("nissan", 46, instrument.Bass);
musician1.play(songs[index]);
musician2.prev();
musician3.next();
musician4.play(songs[index]);
var band1 = new module.Band("bandRock", [musician1, musician2, musician3, musician4]);
band1.play(songs[index]);
band1.prev();
band1.next();
