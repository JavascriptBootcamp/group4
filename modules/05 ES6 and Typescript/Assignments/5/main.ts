interface ITheatre {
    name: string;
    openingHour: number;
    closingHour: number;
    totalSeats?: number;
}
class Theatre implements ITheatre {
    public name: string;
    public openingHour: number;
    public closingHour: number;
    public totalSeats?: number;
    constructor(name: string, openingHour = 8, closingHour = 18, totalSeats?: number) {
        this.name = name;
        this.setOpeningHour(openingHour);
        this.setClosingHour(closingHour);
        this.totalSeats = totalSeats;
    }
    setOpeningHour(openingHour: number): void {
        if (openingHour >= 8 && openingHour <= 12) {
            this.openingHour = openingHour;
        }
    }
    setClosingHour(closingHour: number): void {
        if (closingHour >= 18 && closingHour <= 22) {
            this.closingHour = closingHour;
        }
    }
    getOpeningHoursPerDay(): number {
        return (this.closingHour - this.openingHour);
    }
    printToDOM(): void {
        document.getElementById("print").innerText +=
        `Theatre name: ${this.name}
        Opening hour: ${this.openingHour}
        Closing hour: ${this.closingHour}
        Opening hours per day: ${this.getOpeningHoursPerDay()}
        Total seats: ${this.totalSeats}
        
        `;
    }
}
let theatre1: Theatre = new Theatre("Habima Theatre", 10, 21, 180);
theatre1.printToDOM();

let theatre2: Theatre = new Theatre("Cameri Theatre", 8, 22);
theatre2.printToDOM();
