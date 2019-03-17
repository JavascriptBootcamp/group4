interface ITheatre{
    _name:string;
    _openingHour:number;
    _closingHour:number;
    totalSeats?:number;
    setOpeningHour(hour:number):void;
    setClosingHour(hour:number):void;
    getActivityHours():number;
    showInDom():void;
}

class Theatre implements ITheatre{
    _name:string;
    _openingHour:number=8;
    _closingHour:number=18;
    _totalSeats?:number;
    constructor(name:string,totalSeats?:number){
        this._name = name;
        this._totalSeats = totalSeats;
    }
    setOpeningHour(hour:number){
        if(hour>=8 && hour<=12)
            this._openingHour = hour;
        else
            throw new Error('opening hour must be between 8 to 12');
    }
    setClosingHour(hour:number){
        if(hour>18 && hour<22)
            this._closingHour = hour;
        else
            throw new Error('opening hour must be between 18 to 22');
    }
    getActivityHours(){
        return this._closingHour-this._openingHour;
    }
    showInDom(){
        let h1 = document.getElementById("theatre-name");
        let h2 = document.getElementById("opening-hours");
        h1.innerText = `Welcome to ${this._name} theatre`;
        h2.innerText = `Openning hours: ${this._openingHour}:00 - ${this._closingHour}:00`;
        if(this._totalSeats){
            let h3 = document.getElementById("seats");
            h3.innerText = `Number of seats: ${this._totalSeats}`;
        }
    }
}

let bima = new Theatre("Bima",22);
bima.setOpeningHour(9);
bima.setClosingHour(19);
console.log(bima.getActivityHours());
bima.showInDom();