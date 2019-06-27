"use strict";
exports.__esModule = true;
var IPlay_1 = require("./IPlay");
var Musician = /** @class */ (function () {
    function Musician(name, age, i) {
        var _this = this;
        this.play = function (song) {
            console.log("the Musician " + _this.name + " play " + song);
        };
        this.next = function () {
            console.log("the Musician " + _this.name + " set next song");
        };
        this.prev = function () {
            console.log("the Musician " + _this.name + " set prev song");
        };
        this.name = name;
        this.age = age;
        this.instrument = i;
    }
    return Musician;
}());
var Band = /** @class */ (function () {
    function Band(name, musicians) {
        var _this = this;
        this.play = function (song) {
            console.log("the Band " + _this.name + " play " + song);
        };
        this.next = function () {
            console.log("the Band " + _this.name + " set next song");
        };
        this.prev = function () {
            console.log("the Band " + _this.name + " set prev song");
        };
        this.name = name;
        this.musicians = musicians;
    }
    return Band;
}());
var Radio = /** @class */ (function () {
    function Radio(brand, price, color) {
        var _this = this;
        this.play = function (song) {
            console.log("the Radio from brand " + _this.brand + " play " + song);
        };
        this.next = function () {
            console.log("the Radio from brand " + _this.brand + " set next song");
        };
        this.prev = function () {
            console.log("the Radio from brand " + _this.brand + " set prev song");
        };
        this.brand = brand;
        if (price)
            this.price = price;
        this.color = color;
    }
    return Radio;
}());
var radio = new Radio("Gimel", 89, IPlay_1.Color.Blue);
radio.play("To night");
radio.next();
radio.prev();
var musician1 = new Musician("David", 29, IPlay_1.Instrument.Bass);
musician1.play("bla bla");
musician1.next();
musician1.prev();
var musician2 = new Musician("Eli", 31, IPlay_1.Instrument.Drums);
var musician3 = new Musician("Moti", 22, IPlay_1.Instrument.Guitar);
var musician4 = new Musician("Ella", 25, IPlay_1.Instrument.Guitar);
var band1 = new Band("Yehudim", [musician2, musician2, musician3, musician4]);
band1.play("Tutim");
band1.next();
band1.prev();
