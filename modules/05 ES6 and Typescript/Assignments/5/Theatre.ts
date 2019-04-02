class Theatre {
    private name : string;
    private openingHour : number;
    private closingHour : number;
    private totalSeats? : number;

    constructor(name : string, openingHour : number = 8, closingHour : number = 18, totalSeats? : number)
    {
        this.name = name;
        this.openingHour = openingHour;
        this.closingHour = closingHour;
        this.totalSeats = totalSeats ? totalSeats : undefined;
    }

    public setOpeningHour(hour : number) : void
    {
        if(hour >= 8 && hour <= 12)
        {
            this.openingHour = hour;
        }
    }

    public setClosingHour(hour : number) : void
    {
        if(hour >= 18 && hour <= 22)
        {
            this.closingHour = hour;
        }
    }

    public getOpeningHour() : number
    {
        return this.openingHour;
    }

    public getClosingHour() : number
    {
        return this.closingHour;
    }

    public getName() : string
    {
        return this.name;
    }

    public TotalHoursOpen() : number{
        return this.closingHour - this.openingHour;
    }

    public print() : void
    {
        const theatreInfoDiv : HTMLDivElement | null= document.querySelector("#theatreInfo");
        let paragraph : HTMLParagraphElement = document.createElement("p");
        if(theatreInfoDiv)
        {
            // Hardcoded ! but just for the fun of using Template String ;)
            let info : string = 
            `Name : ${this.name}
            Opening Hour : ${this.openingHour}
            Closing Hour : ${this.closingHour}
            Total Seats : ${this.totalSeats}`;

            paragraph.innerText = info;
            theatreInfoDiv.appendChild(paragraph);
        }
    }
}

let theatre1 : Theatre = new Theatre("Bima", 9, 21, 10);
theatre1.setClosingHour(22);
theatre1.setOpeningHour(10);
theatre1.TotalHoursOpen();
theatre1.print();

let theatre2 : Theatre = new Theatre("Havayot");
theatre2.setClosingHour(20);
theatre2.setOpeningHour(11);
theatre2.TotalHoursOpen();
theatre2.print();
