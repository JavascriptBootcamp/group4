
class Theatre  {
    public name: string;
    private openingHour: number;
    private closingHour: number;
    public totalSeats: number;

    constructor(name:string, openingHour = 8, closingHour = 18, totalSeats?) {
        this.name = name;
        this.openingHour = openingHour;
        this.closingHour = closingHour;
        this.totalSeats = totalSeats;
    }

    public setOpeningHour(openingHour: number): void {
        if (openingHour >= 8 && openingHour <= 12)  this.openingHour = openingHour;   
    }

    public setClosingHour(closingHour: number): void {
        if (closingHour >= 18 && closingHour <= 22) {
            this.closingHour = closingHour;
        }
    }

    public getOpeningHoursDuration(): number {
        return this.closingHour - this.openingHour;
    }

    public getTotalSeats(): string {
        if(this.totalSeats) return this.totalSeats.toString();
        else return "no information about total seats";
    }

    public printTheatrePropertiesToDOM(): void {
        let theatrePropertiesElem = document.getElementById("theatre-prop");

        theatrePropertiesElem.innerText += `
            Theatre name: ${this.name}
            Opening hour : ${this.openingHour}
            Closing hour : ${this.closingHour}
            Opening hours duration: ${this.getOpeningHoursDuration()}
            Total seats: ${this.getTotalSeats()}
        `;
    }
}
let theatre1 = new Theatre("Cinema City", 8, 20, 20000);
			theatre1.setOpeningHour(10);
			theatre1.setClosingHour(20);
            theatre1.printTheatrePropertiesToDOM();
            
let theatre2 = new Theatre("rav hen", undefined, 21);
			theatre2.printTheatrePropertiesToDOM(); 
