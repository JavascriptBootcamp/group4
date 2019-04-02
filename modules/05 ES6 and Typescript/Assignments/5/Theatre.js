var Theatre = /** @class */ (function () {
    function Theatre(name, openingHour, closingHour, totalSeats) {
        if (openingHour === void 0) { openingHour = 8; }
        if (closingHour === void 0) { closingHour = 18; }
        this.name = name;
        this.openingHour = openingHour;
        this.closingHour = closingHour;
        this.totalSeats = totalSeats ? totalSeats : undefined;
    }
    Theatre.prototype.setOpeningHour = function (hour) {
        if (hour >= 8 && hour <= 12) {
            this.openingHour = hour;
        }
    };
    Theatre.prototype.setClosingHour = function (hour) {
        if (hour >= 18 && hour <= 22) {
            this.closingHour = hour;
        }
    };
    Theatre.prototype.getOpeningHour = function () {
        return this.openingHour;
    };
    Theatre.prototype.getClosingHour = function () {
        return this.closingHour;
    };
    Theatre.prototype.getName = function () {
        return this.name;
    };
    Theatre.prototype.TotalHoursOpen = function () {
        return this.closingHour - this.openingHour;
    };
    Theatre.prototype.print = function () {
        var theatreInfoDiv = document.querySelector("#theatreInfo");
        var paragraph = document.createElement("p");
        if (theatreInfoDiv) {
            // Hardcoded ! but just for the fun of using Template String ;)
            var info = "Name : " + this.name + "\n            Opening Hour : " + this.openingHour + "\n            Closing Hour : " + this.closingHour + "\n            Total Seats : " + this.totalSeats;
            paragraph.innerText = info;
            theatreInfoDiv.appendChild(paragraph);
        }
    };
    return Theatre;
}());
var theatre1 = new Theatre("Bima", 9, 21, 10);
theatre1.setClosingHour(22);
theatre1.setOpeningHour(10);
theatre1.TotalHoursOpen();
theatre1.print();
var theatre2 = new Theatre("Havayot");
theatre2.setClosingHour(20);
theatre2.setOpeningHour(11);
theatre2.TotalHoursOpen();
theatre2.print();
