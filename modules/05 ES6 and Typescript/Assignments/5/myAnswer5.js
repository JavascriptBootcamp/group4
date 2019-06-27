var MyTheatre = /** @class */ (function () {
    function MyTheatre(name, openH, closeH, totalSeats) {
        var _this = this;
        this.getOpeningHoursDuration = function () {
            return _this._closingHour - _this.openingHour;
        };
        this.getTotalSeats = function () {
            if (_this.totalSeats)
                return _this.totalSeats.toString();
            else
                return "no information about total seats";
        };
        this.printTheatrePropertiesToDOM = function () {
            var theatre_elm = document.getElementById('theatre_details');
            theatre_elm.innerText += "\n        Theatre name: " + _this.name + "\n        Opening hours: " + _this.openingHour + "\n        Closing hours: " + _this._closingHour + "\n        Opening Hours Duration: " + _this.getOpeningHoursDuration() + "\n        Total Seats: " + _this.getTotalSeats() + "\n        ";
        };
        this.name = name;
        this.openingHour = openH;
        this._closingHour = closeH;
        this.totalSeats = totalSeats;
    }
    MyTheatre.prototype.getOpeningHour = function () {
        return this.openingHour;
    };
    MyTheatre.prototype.setOpeningHour = function (openH) {
        if (openH > 0 && openH < 8)
            this.openingHour = 8;
        else if (openH > 12)
            this.openingHour = 12;
        else
            this.openingHour = openH;
    };
    MyTheatre.prototype.getClosingHour = function () {
        return this._closingHour;
    };
    MyTheatre.prototype.setClosingHour = function (closeH) {
        if (closeH < 18)
            this._closingHour = 18;
        else if (closeH > 22)
            this._closingHour = 22;
        else
            this._closingHour = closeH;
    };
    return MyTheatre;
}());
var t1 = new MyTheatre("cell city", 7, 23);
t1.printTheatrePropertiesToDOM();
var t2 = new MyTheatre("cell city", 9, 22, 70);
t2.printTheatrePropertiesToDOM();
