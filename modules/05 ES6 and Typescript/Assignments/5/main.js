var Theatre = /** @class */ (function () {
    function Theatre(name, openingHour, closingHour, totalSeats) {
        if (openingHour === void 0) { openingHour = 8; }
        if (closingHour === void 0) { closingHour = 18; }
        this.name = name;
        this.setOpeningHour(openingHour);
        this.setClosingHour(closingHour);
        this.totalSeats = totalSeats;
    }
    Theatre.prototype.setOpeningHour = function (openingHour) {
        if (openingHour >= 8 && openingHour <= 12) {
            this.openingHour = openingHour;
        }
    };
    Theatre.prototype.setClosingHour = function (closingHour) {
        if (closingHour >= 18 && closingHour <= 22) {
            this.closingHour = closingHour;
        }
    };
    Theatre.prototype.getOpeningHoursPerDay = function () {
        return (this.closingHour - this.openingHour);
    };
    Theatre.prototype.printToDOM = function () {
        document.getElementById("print").innerText +=
            "Theatre name: " + this.name + "\n        Opening hour: " + this.openingHour + "\n        Closing hour: " + this.closingHour + "\n        Opening hours per day: " + this.getOpeningHoursPerDay() + "\n        Total seats: " + this.totalSeats + "\n        \n        ";
    };
    return Theatre;
}());
var theatre1 = new Theatre("Habima Theatre", 10, 21, 180);
theatre1.printToDOM();
var theatre2 = new Theatre("Cameri Theatre", 8, 22);
theatre2.printToDOM();
