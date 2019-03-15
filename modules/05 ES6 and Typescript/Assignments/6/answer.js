var Instrument;
(function (Instrument) {
    Instrument["guitar"] = "Guitar";
    Instrument["drums"] = "Drums";
    Instrument["bass"] = "Bass";
    Instrument["none"] = "None";
})(Instrument || (Instrument = {}));
var Color;
(function (Color) {
    Color["red"] = "Red";
    Color["blue"] = "Blue";
    Color["yellow"] = "Yellow";
})(Color || (Color = {}));
var Musician = /** @class */ (function () {
    function Musician(_name, _age, _instrument) {
        this.name = _name;
        this.age = _age;
        this.instrument = _instrument;
    }
    Musician.prototype.play = function (song) {
        console.log('name:', this.name);
        console.log('age:', this.age);
        console.log('instrument:', this.instrument);
        console.log('Playing', song);
    };
    ;
    Musician.prototype.next = function () {
        console.log('Moved to the next song');
    };
    ;
    Musician.prototype.prev = function () {
        console.log('Moved to the previous song');
    };
    ;
    return Musician;
}());
var Band = /** @class */ (function () {
    function Band(_name, _musicians) {
        this.name = _name;
        this.musicians = _musicians;
    }
    Band.prototype.play = function (song) {
        console.log('band name:', this.name);
        this.musicians.forEach(function (member, index) {
            console.log('member name' + (index + 1) + ': ' + member.name);
        });
        console.log('Playing', song);
    };
    ;
    Band.prototype.next = function () {
        console.log('Moved to the next song');
    };
    ;
    Band.prototype.prev = function () {
        console.log('Moved to the previous song');
    };
    ;
    return Band;
}());
var Radio = /** @class */ (function () {
    function Radio(_brand, _color, _price) {
        this.brand = _brand;
        this.color = _color;
        this.price = Math.abs(_price);
    }
    Radio.prototype.play = function (song) {
        console.log('brand:', this.brand);
        console.log('color:', this.color);
        console.log('price:', this.price);
        console.log('Playing', song);
    };
    ;
    Radio.prototype.next = function () {
        console.log('Moved to the next song');
    };
    ;
    Radio.prototype.prev = function () {
        console.log('Moved to the previous song');
    };
    ;
    return Radio;
}());
var radio = new Radio('Interscope', Color.blue, 22);
radio.play('Despacito');
radio.prev();
radio.next();
console.log('-------------------------------------------');
var eminem = new Musician('Eminem', 45, Instrument.none);
eminem.play('Not Afraid');
eminem.prev();
eminem.next();
console.log('-------------------------------------------');
var greenDay = new Band('Green Day', [new Musician('Billie Joe Armstrong', 48, Instrument.none), new Musician('Mike Dirnt', 48, Instrument.bass), new Musician('Tre Cool', 45, Instrument.drums), new Musician('Jason White', 44, Instrument.guitar)]);
greenDay.play('American Idiot');
greenDay.prev();
greenDay.next();
