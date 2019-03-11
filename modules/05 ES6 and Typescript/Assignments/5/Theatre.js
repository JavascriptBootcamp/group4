class Theatre {
    constructor(_name, openHour = 8, closeHour = 18, _seats) {
        this.name = _name;
        this.openningHour = openHour;
        this.closingHour = closeHour;
        this.seats = _seats;
    }
    set openningHour(hour) {
        if (hour < 8 || hour > 12) {
            console.log("enter hour between 8 to 12");
        }
        else {
            this._openningHour = hour;
        }
    }
    set closingHour(Hour) {
        if (Hour < 18 || Hour > 22) {
            console.log("enter hour between 18 to 22");
        }
        else {
            this._closingHour = Hour;
        }
    }
    calculateOpenHours() {
        return this._closingHour - this._openningHour;
    }
    print() {
        const text = `name:${this.name}
opening hour:${this._openningHour} 
closing hour :${this._closingHour}
number of seats:${this.seats}
`;
        console.log(text);
    }
}
let t1 = new Theatre("Theatre_one", undefined, undefined, 5);
console.log(`openning hours of Theatre_one:${t1.calculateOpenHours()}`);
console.log(t1.print());
let t2 = new Theatre("Theatre_two", 9, 20, 8);
console.log(`openning hours of Theatre_two:${t2.calculateOpenHours()}`);
console.log(t2.print());
