interface ITheatre {
    totalNumber?: number;
    name: string;
    openingHour?: number;
    closingHour?: number;
}


class Theatre implements ITheatre {
    totalNumber?: number;
    name: string;
    openingHour?: number;
    closingHour?: number;
    constructor(name, openingHour = 8, closingHour = 18, totalNumber?: number) {
        this.name = name;
        this.openingHour = openingHour;
        this.closingHour = closingHour;
        this.totalNumber = totalNumber;
    }
    // theatre:ITheatre
    // constructor(t:ITheatre) {
    //     console.log(t)
    //     for (const key in t) {
    //         if (t.hasOwnProperty(key)) {
    //             this.+key = t[key];

    //         }
    //     }
    //     this.theatre.name = t.name;
    //     this.theatre.openingHour = this.validOpeningHour(t.openingHour);
    //     this.theatre.openingHour = this.validOpeningHour(t.closingHour);

    //     // this.theatre.openingHour = t.openingHour? t.openingHour :8;
    //     // this.theatre.closingHour = t.closingHour?t.closingHour:18;
    //     this.theatre.totalNumber=t.totalNumber;
    // }
    validOpeningHour(openingHour: number): number {
        return (openingHour > 7 && openingHour < 13) ? openingHour : 8;

    }
    validOClosingHour(closingHour: number): number {
        return (closingHour > 17 && closingHour < 23) ? closingHour : 18;

    }
    public print(): void {
        var p: HTMLElement = document.getElementById("print")!;
        console.log(p)
        p.innerHTML += `Theatre name: ${this.name}<br>
        Theatre closing hour: ${this.closingHour}<br>
        Theatre penin hour: ${this.openingHour}<br>
        totalNumber?: number; ${this.totalNumber}<br><br>`;
        // console.log(this.name);
        //   for (const key in this.theatre) {
        //       if (this.theatre.hasOwnProperty(key)) {
        //         // document.getElementById("print").innerHTML+=   this.theatre[key]
        //    console.log(this.theatre[key])   ;  
        //       }
        //   }

    }
    // public

    public howManyHours(): number {
        return (this.closingHour - this.openingHour);
    }
}

const mytheatre1: Theatre = new Theatre("wedewd", 8, 6, 4);
mytheatre1.print();

const mytheatre2: Theatre = new Theatre("hello", 9, 26);
mytheatre2.print();

