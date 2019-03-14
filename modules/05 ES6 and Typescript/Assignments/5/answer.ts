class Theatre {
    
    name:string;
    opening_hour:number;
    closing_hour:number;

    constructor(name:string,open:number = 8 ,close:number = 18,...args){
        this.name = name;
        this.opening_hour = this.setTimeValidator(open,true);
        this.closing_hour = this.setTimeValidator(close,false);
        if (args.length === 1 ) 
            console.log(`Seats in the theatre is ${args[0]}`);
    }

    private setTimeValidator(num:number,bol:boolean):number {
        
        if (bol) {
            if (num >= 8 && num <= 12) {
                return num;
            } else {
                return 8;
            }
        } else {
            if (num >= 18 && num <= 22) {
                return num;
            } else {
                return 18;
            }
        }
    }

    openingDuration () : number {
        console.log(`Open duration ${this.closing_hour - this.opening_hour}`);
        return this.closing_hour - this.opening_hour;
    }

    print2DOM () : void {
        console.log(`Theatre ${this.name} is open from ${this.opening_hour} until ${this.closing_hour}`);
    }
    
}

var t1 = new Theatre ("Th1",10,20,50);
var t2 = new Theatre ("Th1",7,23);
t1.openingDuration();
t1.print2DOM();
t2.openingDuration();
t2.print2DOM();
