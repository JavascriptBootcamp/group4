

class Theatre {

    private name: string;
    private openingHour: number;
    private closingHour: number;
    private totalSeats: number;

    constructor(_name: string, _openingHour: number = 8, _closingHour: number = 18, _totalSeats?) {
        this.name = _name;
        this.openingHour = _openingHour;
        this.closingHour = _closingHour;
        this.totalSeats = _totalSeats;
    }

    opening(hour: number) {
        if ((hour >= 8) && (hour <= 12))
            this.openingHour = hour;
        else
            console.log("enter hour between 8:00 to 12:00");
    }

    closing(hour: number) {
        if ((hour >= 18) && (hour <= 22))
            this.closingHour = hour;
        else
            console.log("enter hour between 18:00 to 22:00");
    }

    ActivityTime(): number {
        return (this.closingHour - this.openingHour);
    }

    information(): void {
         document.body.innerHTML =  `${this.name} Theater:
        opening hour: ${this.openingHour}:00
        closing hour: ${this.closingHour}:00`;
    }
}

let Theater1 = new Theatre("Habima", 9, 18, 200);
let Theater2 = new Theatre("Jerusalem", undefined, 20);
Theater1.opening(10);
Theater1.closing(22);
Theater1.information();
console.log(Theater1.ActivityTime());
Theater2.information();
