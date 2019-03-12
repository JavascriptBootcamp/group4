class Theatre {
    public _name: string;
    public _totalSeats: number;
    private _openingHour: number;
    private _closingHour: number;
    constructor(name, openingHour = 8, closingHour = 18, totalSeats?) {
        this._name = name;
        this._totalSeats = totalSeats;
        this._openingHour = openingHour;
        this._closingHour = closingHour;
    }
    public openingHourSetter(openingHour: number): void {
        if (openingHour >= 8 && openingHour <= 12) {
            this._openingHour = openingHour;
        }
    }
    public closingHourSetter(closingHour: number): void {
        if (closingHour >= 18 && closingHour <= 22) {
            this._closingHour = closingHour;
        }
    }
    public calculatOpeningHours(): number {
        return this._closingHour - this._openingHour;
    }
    public printAllProperties(): void {
        let log = document.getElementById("log");
        log.innerText += `
        name : ${this._name}
        open at : ${this._openingHour}
        closing at : ${this._closingHour}`;
    }
}
let t1 = new Theatre("cinema city", 10, 21);
let t2 = new Theatre("yes planet", undefined, undefined, 250);
t1.openingHourSetter(13);
t1.closingHourSetter(19);
console.log(t1.calculatOpeningHours());
console.log(t2.calculatOpeningHours());
t1.printAllProperties();
t2.printAllProperties();
