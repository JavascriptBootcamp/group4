class MyTheatre {
    private name: string;
    private openingHour: number;
    private _closingHour: number;
    private totalSeats: number;

    constructor(name: string, openH: number, closeH: number, totalSeats?: number) {
        this.name = name;
        this.openingHour = openH;
        this._closingHour = closeH;
        this.totalSeats = totalSeats
    }

    public getOpeningHour(): number {
        return this.openingHour;
    }
    public setOpeningHour(openH: number):void {
        if (openH > 0 && openH < 8)
            this.openingHour = 8;
        else if (openH > 12)
            this.openingHour = 12;
        else this.openingHour = openH;
    }

    public getClosingHour(): number {
        return this._closingHour;
    }
    public setClosingHour(closeH: number) {
        if (closeH < 18)
            this._closingHour = 18;
        else if (closeH > 22)
            this._closingHour = 22;
        else this._closingHour = closeH;
    }

    getOpeningHoursDuration = () => {
        return this._closingHour - this.openingHour;
    }

    getTotalSeats = () =>{
        if (this.totalSeats)
            return this.totalSeats.toString();
        else
            return "no information about total seats";
    };

    printTheatrePropertiesToDOM=()=>{
        let theatre_elm=document.getElementById('theatre_details');
        theatre_elm.innerText+=`
        Theatre name: ${this.name}
        Opening hours: ${this.openingHour}
        Closing hours: ${this._closingHour}
        Opening Hours Duration: ${this.getOpeningHoursDuration()}
        Total Seats: ${this.getTotalSeats()}
        `;
    }
}

let t1=new MyTheatre("cell city",7,23);
t1.printTheatrePropertiesToDOM();

let t2=new MyTheatre("cell city",9,22,70);
t2.printTheatrePropertiesToDOM();