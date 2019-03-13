class Theatre{
    private name: string;
    private openingHour: number;
    private closingHour: number;
    private totalSeats: number;

    constructor(name: string, openingHour: number=8 , closingHour: number=18, totalSeats?: number){
        this.setName(name);
        this.setOpeningHour(openingHour);
        this.closingHour = closingHour;
        if(totalSeats){
            this.setTotalSeats(totalSeats);
        }
    }

    public setTotalSeats(totalSeats: number): void{
        this.totalSeats = totalSeats;
    }

    public getTotalSeats(): number{
        return this.totalSeats;
    }

    public setName(name: string): void{
        this.name = name;
    }

    public getName(): string{
        return this.name;
    }

    public setOpeningHour(openingHour: number): void{
        if(openingHour >= 8 && openingHour <= 12){
            this.openingHour = openingHour;
        }
    }

    public getOpeningHour(): number{
            return this.openingHour;
    }

    public setClosingHour(closingHour: number): void{
        if(closingHour >= 18 && closingHour <= 22){
            this.closingHour = closingHour;
        }
    }

    public getClosingHour(): number{
            return this.closingHour;
    }

    public calcOpenHoursDuringDay(): number{
        return this.getClosingHour() - this.getOpeningHour();
    }

    public printPropToDOM(): void{
        let divPrint = document.createElement("div");
        divPrint.innerText = `"Theatre Name: " ${this.name} , Opening Hour: ${this.getOpeningHour()}, closing Hour: ${this.getClosingHour()}, Total Seat: ${this.getTotalSeats()}.`

        divPrint.appendChild(this.createBR());
        const body = document.getElementsByTagName("body")[0];
        body.appendChild(divPrint);
        body.appendChild(this.createBR());
    }

    public createBR(): Node{
        return document.createElement("br");
    }

} 

let t1 = new Theatre("t1",10,20);
let t2 = new Theatre("t2",9,20,60);

t1.printPropToDOM();
let nameT1 = t1.getName();
let closingHourT1 = t1.getClosingHour();
let openingHourT1 = t1.getOpeningHour();
let totalseatT1 = t1.getTotalSeats();
t1.setName("t1-new");
t1.setOpeningHour(t1.getOpeningHour()-1);
t1.setClosingHour(t1.getClosingHour()-1);
t1.setTotalSeats(t1.getTotalSeats() + 10);



t2.printPropToDOM();
let nameT2 = t2.getName();
let closingHourT2 = t2.getClosingHour();
let openingHourT2 = t2.getOpeningHour();
let totalseatT2 = t2.getTotalSeats();
t2.setName("t2-new");
t2.setOpeningHour(t2.getOpeningHour()-2);
t2.setClosingHour(t2.getClosingHour()-2);
t2.setTotalSeats(t2.getTotalSeats() - 10);

t1.printPropToDOM();
t2.printPropToDOM();