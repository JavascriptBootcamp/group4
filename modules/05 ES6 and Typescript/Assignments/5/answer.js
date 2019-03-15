var Theatre = /** @class */ (function () {
    function Theatre(_name, opening, closing, _totalSeats) {
        if (opening === void 0) { opening = 8; }
        if (closing === void 0) { closing = 18; }
        function setOpening() {
            if (opening > 12 || opening < 8) {
                opening = 8;
            }
        }
        function setClosing() {
            if (closing > 22 || closing < 18) {
                closing = 18;
            }
        }
        setOpening();
        setClosing();
        this.name = _name;
        this.opening_hour = opening;
        this.closing_hour = closing;
        if (_totalSeats)
            this.total_seats = _totalSeats;
    }
    Theatre.prototype.getTotalHours = function () {
        return this.closing_hour - this.opening_hour;
    };
    Theatre.prototype.printProperties = function () {
        document.body.innerHTML += "<h1>Name: " + this.name + "</h1>";
        document.body.innerHTML += "<h1>Opening hour: " + this.opening_hour + "</h1>";
        document.body.innerHTML += "<h1>Closing hour: " + this.closing_hour + "</h1>";
        if (this.total_seats)
            document.body.innerHTML += "<h1>Total seats: " + this.total_seats + "</h1>";
    };
    return Theatre;
}());
var t1 = new Theatre('Habima', 7);
var t2 = new Theatre('Lessin', 9, 20, 100);
alert(t1.name + ' opens ' + t1.getTotalHours() + ' hours.');
alert(t2.name + ' opens ' + t2.getTotalHours() + ' hours.');
t1.printProperties();
t2.printProperties();
