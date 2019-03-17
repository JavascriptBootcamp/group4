var Theatre = /** @class */ (function () {
    function Theatre(openingHour, closingHour, theatreName, totalSeats) {
        if (openingHour === void 0) { openingHour = 8; }
        if (closingHour === void 0) { closingHour = 18; }
        this.openingHour = openingHour;
        this.closingHour = closingHour;
        this.theatreName = theatreName;
        this.totalSeats = totalSeats;
    }
    Theatre.prototype.setOpeninghOUR = function (openingH) {
        if (openingH >= 8 && openingH <= 12) {
            this.openingHour = openingH;
        }
    };
    Theatre.prototype.setClosingHour = function (closingH) {
        if (closingH >= 18 && closingH <= 22) {
            this.closingHour = closingH;
        }
    };
    Theatre.prototype.getOpeningHour = function () {
        return this.openingHour;
    };
    Theatre.prototype.getClosingHour = function () {
        return this.closingHour;
    };
    return Theatre;
}());
var t1 = new Theatre(9, 12, "ROOM 1", 40);
var t2 = new Theatre(7, 15, "ROOM2");
t1.setClosingHour(13);
t1.setOpeninghOUR(6);
t1.theatreName = "ROOM5";
t2.theatreName = "ROOM7";
document.getElementById("result").innerHTML += "Opening Hour :  " + t1.getOpeningHour() + "  <br/>";
document.getElementById("result").innerHTML += "Closing Hour :  " + t1.getClosingHour() + "  <br/>";
document.getElementById("result").innerHTML += "Theatre :  " + t1.theatreName + "  <br/>";
document.getElementById("result").innerHTML += "Seats :  " + t1.totalSeats + "  <br/>";
