class Theatre {
    name: string;
    opening_hour: number;
    closing_hour: number;
    total_seats?: number;
    constructor(_name:string, opening=8, closing=18, _totalSeats?: number) {
        function setOpening(): void {
            if(opening > 12 || opening < 8){
                opening = 8;
            }
        }
        function setClosing(): void {
            if(closing > 22 || closing < 18){
                closing = 18;
            }
        }
        setOpening();
        setClosing();
        this.name = _name;
        this.opening_hour = opening;
        this.closing_hour = closing;
        if(_totalSeats)
            this.total_seats = _totalSeats;
    }
    getTotalHours(): number {
        return this.closing_hour - this.opening_hour;
    }
    printProperties(): void {
        document.body.innerHTML +=`<h1>Name: ${this.name}</h1>`;
        document.body.innerHTML +=`<h1>Opening hour: ${this.opening_hour}</h1>`;
        document.body.innerHTML +=`<h1>Closing hour: ${this.closing_hour}</h1>`;
        if(this.total_seats)
            document.body.innerHTML +=`<h1>Total seats: ${this.total_seats}</h1>`;
    }
}

const t1 = new Theatre('Habima', 7);
const t2 = new Theatre('Lessin', 9, 20, 100);

alert(t1.name + ' opens ' + t1.getTotalHours() + ' hours.');
alert(t2.name + ' opens ' + t2.getTotalHours()+ ' hours.');
t1.printProperties();
t2.printProperties();