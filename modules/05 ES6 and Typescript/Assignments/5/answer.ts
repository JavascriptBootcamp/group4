class Theatre  {
    constructor(private openingHour: number = 8,private closingHour: number = 18, public theatreName: string, public totalSeats?: number){}
    setOpeninghOUR (openingH: number) {
        if (openingH >= 8 && openingH <= 12) {
            this.openingHour = openingH;
        }
    }
    setClosingHour (closingH: number) {
        if (closingH >= 18 && closingH <= 22) {
            this.closingHour = closingH;
        }
    }
    getOpeningHour() {
        return this.openingHour;
    }
    getClosingHour () {
        return this.closingHour;
    }

}

let t1 = new Theatre(9, 12, "ROOM 1", 40);
let t2 = new Theatre(7, 15, "ROOM2");

t1.setClosingHour(13);
t1.setOpeninghOUR(6);
t1.theatreName = "ROOM5";
t2.theatreName = "ROOM7";
document.getElementById("result").innerHTML += `Opening Hour :  ${t1.getOpeningHour()}  <br/>` 
document.getElementById("result").innerHTML += `Closing Hour :  ${t1.getClosingHour()}  <br/>` 
document.getElementById("result").innerHTML += `Theatre :  ${t1.theatreName}  <br/>` 
document.getElementById("result").innerHTML += `Seats :  ${t1.totalSeats}  <br/>` 


