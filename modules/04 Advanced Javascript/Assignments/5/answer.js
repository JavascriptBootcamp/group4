var Theatre = /** @class */ (function () {
    function Theatre(name, totalSeats) {
        this._openingHour = 8;
        this._closingHour = 18;
        this._name = name;
        this._totalSeats = totalSeats;
    }
    Theatre.prototype.setOpeningHour = function (hour) {
        if (hour >= 8 && hour <= 12)
            this._openingHour = hour;
        else
            throw new Error('opening hour must be between 8 to 12');
    };
    Theatre.prototype.setClosingHour = function (hour) {
        if (hour > 18 && hour < 22)
            this._closingHour = hour;
        else
            throw new Error('opening hour must be between 18 to 22');
    };
    Theatre.prototype.getActivityHours = function () {
        return this._closingHour - this._openingHour;
    };
    Theatre.prototype.showInDom = function () {
        var h1 = document.getElementById("theatre-name");
        var h2 = document.getElementById("opening-hours");
        h1.innerText = "Welcome to " + this._name + " theatre";
        h2.innerText = "Openning hours: " + this._openingHour + ":00 - " + this._closingHour + ":00";
        if (this._totalSeats) {
            var h3 = document.getElementById("seats");
            h3.innerText = "Number of seats: " + this._totalSeats;
        }
    };
    return Theatre;
}());
var bima = new Theatre("Bima", 22);
bima.setOpeningHour(9);
bima.setClosingHour(19);
console.log(bima.getActivityHours());
bima.showInDom();
