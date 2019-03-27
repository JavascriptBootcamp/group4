var Theatre = /** @class */ (function () {
    function Theatre(name, openingHour, closingHour, totalSeats) {
        if (openingHour === void 0) { openingHour = 8; }
        if (closingHour === void 0) { closingHour = 18; }
        this.name = name;
        this.openingHour = openingHour;
        this.closingHour = closingHour;
        this.totalSeats = totalSeats;
    }
    Theatre.prototype.setOpeningHour = function (openingHour) {
        if (openingHour >= 8 && openingHour <= 12)
            this.openingHour = openingHour;
    };
    Theatre.prototype.setClosingHour = function (closingHour) {
        if (closingHour >= 18 && closingHour <= 22) {
            this.closingHour = closingHour;
        }
    };
    Theatre.prototype.getOpeningHoursDuration = function () {
        return this.closingHour - this.openingHour;
    };
    Theatre.prototype.getTotalSeats = function () {
        if (this.totalSeats)
            return this.totalSeats.toString();
        else
            return "no information about total seats";
    };
    Theatre.prototype.printTheatrePropertiesToDOM = function () {
        var theatrePropertiesElem = document.getElementById("theatre-prop");
        theatrePropertiesElem.innerText += "\n            Theatre name: " + this.name + "\n            Opening hour : " + this.openingHour + "\n            Closing hour : " + this.closingHour + "\n            Opening hours duration: " + this.getOpeningHoursDuration() + "\n            Total seats: " + this.getTotalSeats() + "\n        ";
    };
    return Theatre;
}());
var theatre1 = new Theatre("Cinema City", 8, 20, 20000);
theatre1.setOpeningHour(10);
theatre1.setClosingHour(20);
theatre1.printTheatrePropertiesToDOM();
var theatre2 = new Theatre("rav hen", undefined, 21);
theatre2.printTheatrePropertiesToDOM();
