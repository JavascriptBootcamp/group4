// import { iTheatre } from "./theatre";
var Theatre = /** @class */ (function () {
    function Theatre(name, openingHour, closingHour, totalSeats) {
        if (openingHour === void 0) { openingHour = 8; }
        if (closingHour === void 0) { closingHour = 18; }
        this._name = name;
        this._totalSeats = totalSeats;
        this._openingHour = openingHour;
        this._closingHour = closingHour;
    }
    Theatre.prototype.openingHourSetter = function (openingHour) {
        if (openingHour >= 8 && openingHour <= 12) {
            this._openingHour = openingHour;
        }
    };
    Theatre.prototype.closingHourSetter = function (closingHour) {
        if (closingHour >= 18 && closingHour <= 22) {
            this._closingHour = closingHour;
        }
    };
    Theatre.prototype.calculatOpeningHours = function () {
        return this._closingHour - this._openingHour;
    };
    Theatre.prototype.printAllProperties = function () {
        var log = document.getElementById("log");
        log.innerText += "\n        name : " + this._name + "\n        open at : " + this._openingHour + "\n        closing at : " + this._closingHour;
    };
    return Theatre;
}());
var t1 = new Theatre("cinema city", 10, 21);
var t2 = new Theatre("yes planet", undefined, undefined, 250);
t1.openingHourSetter(13);
t1.closingHourSetter(19);
console.log(t1.calculatOpeningHours());
console.log(t2.calculatOpeningHours());
t1.printAllProperties();
t2.printAllProperties();
