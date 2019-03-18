class Theatre{
    private thName :string;
    private openingHour : number;
    private closingHour : number;
    private totalSeats : number;
    constructor(thName,openingHour=8,closingHour=18,totalSeats=null){
        this.thName=thName;
        this.setOpeningHour(openingHour);
        this.setClosingHour(closingHour);
        this.totalSeats=totalSeats;

    }
    
    //set properties of openingHour and closingHour

     setOpeningHour(openingHour){
        if(openingHour>=8&&openingHour<=12){
            this.openingHour=openingHour;
        }
        else console.log("not valid openingHour ");
    }
     setClosingHour(closingHour){
        if(closingHour>=18&&closingHour<=22){
            this.closingHour=closingHour;
        }
        else console.log("not valid closingHour");

    }


    hoursPerDay():number{

        return this.closingHour-this.openingHour;
    }

    toString():void{
        var str = `Theater name : ${this.thName} , openening hour at : ${this.openingHour} and closing hour at : ${this.closingHour}  `;
        if(this.totalSeats!==null)
        str += `and the total seats is ${this.totalSeats}`;
        console.log(str);
    }


 }

var ins1 : Theatre =new Theatre("Theater1",10,22,29);
var ins2 : Theatre =new Theatre("Theater2");

ins1.setOpeningHour(11);//changes its openening hour
ins1.setClosingHour(22);
console.log(ins1.hoursPerDay());
ins1.toString();

ins2.setOpeningHour(9);
ins2.setClosingHour(21);
console.log(ins2.hoursPerDay());
ins2.toString();
