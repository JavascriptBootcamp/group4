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
        console.log('Name:', this.name);
        console.log('Opening hour:', this.opening_hour);
        console.log('Closing hour:', this.closing_hour);
        if(this.total_seats)
            console.log('Total seats:', this.total_seats);
    }
}

const t1 = new Theatre('Habima', 7);
const t2 = new Theatre('Lessin', 9, 19, 100);

t1.getTotalHours();
t2.getTotalHours();
t1.printProperties();
t2.printProperties();