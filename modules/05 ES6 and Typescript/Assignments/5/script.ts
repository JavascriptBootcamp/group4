class Theatre {
    private name: string;
    private _openingHour: number;
    private _closingHour: number;
    private _totalSeats: number;

    constructor(name: string, openingHour: number = 8, closingHour: number = 18, totalSeats?: number) {
        this.name = name;
        this._openingHour = openingHour;
        this._closingHour = closingHour;
        this._totalSeats = totalSeats;
    }

    public set_openingHour(hour: number) {
        if ((hour >= 8) && (hour <= 12))
            this._openingHour = hour;
        else
            alert("Enter hour between 8:00 to 12:00");
    }

    public set_closingHour(hour: number) {
        if ((hour >= 18) && (hour <= 22))
            this._closingHour = hour;
        else
            alert("Enter hour between 18:00 to 22:00");
    }

    public workHours(): number {
        return this._closingHour - this._openingHour;
    }

    public print(): void {
        document.getElementById("divPrint").innerHTML += `<h3>${this.name} Theater:
        <br>Opening hour: ${this._openingHour}:00.
        <br>Closing hour: ${this._closingHour}:00.<br> 
        ${this._totalSeats ? 'Total Seat ' + this._totalSeats + '.</h3>' : '</h3>'}`;
    }
}

const t1: Theatre = new Theatre("Habima", 12, 22, 10);
const t2: Theatre = new Theatre("Cameri");
t1.set_openingHour(10);
t1.set_closingHour(20);
t1.workHours();
t1.print();
t2.print();
