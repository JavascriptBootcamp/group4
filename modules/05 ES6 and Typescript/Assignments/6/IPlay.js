var Instrument;
(function (Instrument) {
    Instrument["Guitar"] = "Guitar";
    Instrument["Drums"] = "Drums";
    Instrument["Bass"] = "Bass";
    Instrument["None"] = "None";
})(Instrument || (Instrument = {}));
var Color;
(function (Color) {
    Color["Red"] = "Red";
    Color["Blue"] = "Blue";
    Color["Yellow"] = "Yellow";
})(Color || (Color = {}));
var songs = ["Song_1", "Song_2", "Song_3", "Song_4", "Song_5"];
var index = 0;
var Musician = /** @class */ (function () {
    function Musician(_name, _age, _instrument) {
        this.name = _name;
        this.age = _age;
        this.instrument = _instrument;
    }
    Musician.prototype.play = function (song) {
        console.log("The song " + song + " is playing now,\n      the Musician name is " + this.name + ",\n      his age is " + this.age + " and he is playing the song with " + this.instrument);
    };
    Musician.prototype.next = function () {
        if (songs[++index]) {
            index++;
        }
        else {
            index = 0;
        }
        console.log("The next song is " + songs[index] + ".");
    };
    Musician.prototype.prev = function () {
        if (songs[--index]) {
            index--;
        }
        else {
            index = songs.length - 1;
        }
        console.log("The previous song is " + songs[index] + ".");
    };
    return Musician;
}());
var Band = /** @class */ (function () {
    function Band(_name, _musicians) {
        this.name = _name;
        this.musicians = _musicians;
    }
    Band.prototype.play = function (song) {
        console.log("The song " + song + " is playing now,\n    the Band's name is " + this.name + "\n    the Musician's details are :");
        for (var i in this.musicians) {
            console.log(this.musicians[i].name + ",age:" + this.musicians[i].age + ",instrument:" + this.musicians[i].instrument);
        }
    };
    Band.prototype.next = function () {
        if (songs[++index]) {
            index++;
        }
        else {
            index = 0;
        }
        console.log("The next song is " + songs[index] + ".");
    };
    Band.prototype.prev = function () {
        if (songs[--index]) {
            index--;
        }
        else {
            index = songs.length - 1;
        }
        console.log("The previous song is " + songs[index] + ".");
    };
    return Band;
}());
var Radio = /** @class */ (function () {
    function Radio(_brand, _color, _price) {
        this.brand = _brand;
        this.color = _color;
        this.price = _price;
    }
    Radio.prototype.play = function (song) {
        console.log("The song " + song + " is playing now,\n    the brand's name is " + this.brand + "\n    the color is " + this.color + "\n    the price is " + this.price);
    };
    Radio.prototype.next = function () {
        if (songs[++index]) {
            index++;
        }
        else {
            index = 0;
        }
        console.log("The next song is " + songs[index] + ".");
    };
    Radio.prototype.prev = function () {
        if (songs[--index]) {
            index--;
        }
        else {
            index = songs.length - 1;
        }
        console.log("The previous song is " + songs[index] + ".");
    };
    return Radio;
}());
var radio = new Radio("fvf", Color.Blue, 200);
radio.play(songs[index]);
radio.prev();
radio.next();
console.log('-------------------------------------------------------');
var musician = new Musician("someOne", 28, Instrument.Bass);
musician.play(songs[index]);
musician.prev();
musician.next();
console.log('-------------------------------------------------------');
var MusiciansArr = [];
var musician_1 = new Musician("someOne_1", 28, Instrument.Bass);
var musician_2 = new Musician("someOne_2", 26, Instrument.Drums);
var musician_3 = new Musician("someOne_3", 24, Instrument.Guitar);
var musician_4 = new Musician("someOne_4", 22, Instrument.None);
MusiciansArr.push(musician_1);
MusiciansArr.push(musician_2);
MusiciansArr.push(musician_3);
MusiciansArr.push(musician_4);
var band = new Band("some_Band", MusiciansArr);
band.play(songs[index]);
band.prev();
band.next();
