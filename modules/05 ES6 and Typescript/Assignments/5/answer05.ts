class Theatre {
    name: string;
    openingHour: number;
    closingHour: number;
    totalSeats: number;

    constructor(name: string, openingHour: number = 8, closingHour: number = 12, totalSeats?: number) {
        this.name = name;
        this.openingHour = openingHour;
        this.closingHour = closingHour;
        if (totalSeats) {
            this.totalSeats = totalSeats;
        }
    }

    set setOpeningHour(openingHour: number) {
        if (openingHour >= 8 && openingHour <= 12) {
            this.openingHour = openingHour;
        }
    }

    set setClosingHour(closingHour: number) {
        if (closingHour >= 18 && closingHour <= 22) {
            this.closingHour = closingHour;
        }
    }

    public openHourDuringTheDay(): number {
        return this.closingHour - this.openingHour;
    }

    public printAllTheatreProps(): void {
        let theatreDiv = document.getElementById("theatre");

        theatreDiv.innerText = `
        Theatre name: ${this.name}
        Opening hour: ${this.openingHour}
        Closing hour: ${this.closingHour}
        Hours the theatre is open during the day: ${this.openHourDuringTheDay()}`;
        if (this.totalSeats) {
            theatreDiv.innerText +=
            `\nTotal seats number: ${this.totalSeats}`;
        }
    }
}

let haBima = new Theatre("haBima", 10, undefined, 583);
let gesher = new Theatre("Gesher");

gesher.setOpeningHour = 11;
gesher.setClosingHour = 20;

haBima.printAllTheatreProps();
gesher.printAllTheatreProps();
