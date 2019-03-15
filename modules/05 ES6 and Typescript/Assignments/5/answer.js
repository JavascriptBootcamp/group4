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
        console.log('Name:', this.name);
        console.log('Opening hour:', this.opening_hour);
        console.log('Closing hour:', this.closing_hour);
        if (this.total_seats)
            console.log('Total seats:', this.total_seats);
    };
    return Theatre;
}());
var t1 = new Theatre('Habima', 7);
var t2 = new Theatre('Lessin', 9, 19, 100);
t1.getTotalHours();
t2.getTotalHours();
t1.printProperties();
t2.printProperties();
