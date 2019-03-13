class Theatre implements ITheatre{
    public _name: string;
    private _openingHour: number;
    private _closingHour: number;
    public _totalSeats: number;

    constructor(name, openingHour = 8, closingHour = 18, totalSeats?) {
        this._name = name;
        this._openingHour = openingHour;
        this._closingHour = closingHour;
        this._totalSeats = totalSeats;
    }

    public setOpeningHour(openingHour: number): void {
        if (openingHour >= 8 && openingHour <= 12)  this._openingHour = openingHour;   
    }

    public setClosingHour(closingHour: number): void {
        if (closingHour >= 18 && closingHour <= 22) {
            this._closingHour = closingHour;
        }
    }

    public getOpeningHoursDuration(): number {
        return this._closingHour - this._openingHour;
    }

    public getTotalSeats(): string {
        if(this._totalSeats) return this._totalSeats.toString();
        else return "no information about total seats";
    }

    public printTheatrePropertiesToDOM(): void {
        let theatrePropertiesElem = document.getElementById("theatre-properties");

        theatrePropertiesElem.innerText += `
            Theatre name: ${this._name}
            Opening hour : ${this._openingHour}
            Closing hour : ${this._closingHour}
            Opening hours duration: ${this.getOpeningHoursDuration()}
            Total seats: ${this.getTotalSeats()}
        `;
    }
}
