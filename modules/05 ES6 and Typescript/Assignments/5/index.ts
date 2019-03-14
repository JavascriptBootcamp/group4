class Theatre {

    name:string;
    opening_hour:number;
    closing_hour:number;
    total_seats:number;

    constructor(name:string, opening_hour:number = 8, closing_hour:number = 18, total_seats?:number) {
        this.name = name;
        this.opening_hour = opening_hour;
        this.closing_hour = closing_hour;
        this.total_seats = total_seats; 
    }

    //opening_hour (use a setter in order to set a positive number between 8-12)
    set_opening(hour:number):void {
        if(hour>8 && hour<12){
            this.opening_hour = hour;
        }
    }

    //closing_hour (use a setter in order to set a positive number between 18-22)
    set_closing(hour:number):void {
        if(hour>18 && hour<22){
            this.closing_hour = hour;
        }
    }

    calc_work_hours():number {
        return this.closing_hour - this.opening_hour;
    }

    print():void {
        for (const key in this) {
            if (  this.hasOwnProperty(key)) {
                const prop =  this[key];
                console.log(`${key} : ${this[key]}`);
            }
        }
    }
}

let tset1 = new Theatre("test", 22);
tset1.print();
    