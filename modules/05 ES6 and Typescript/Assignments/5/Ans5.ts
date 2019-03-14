class Theatre {
    name:string ;
    private openingHr:number;
    private closingHr:number;
    totalSeats: number
    constructor(name: string ,openingHr: number=8,closingHr: number=18, totalSeats?:number){
        this.name = name;
        this.openingHr = openingHr;
        this.closingHr = closingHr;
        this.totalSeats = totalSeats;
    }
    getOpeningHr():number {return this.openingHr;}
    getClosingHr():number {return this.closingHr;}
    
    setOpeningHr(hr): void{
        if(hr >= 8 && hr <= 12){
            this.openingHr = hr;
        }
        else{
            console.log("Hour not in range")
        }
    }
    setClosingHr(hr): void{
        if( 18 <= hr && hr <= 22){
            this.openingHr = hr;
        }
        else{
            console.log("Hour not in range")
        }
    }
    calcOpenTime(): number  {
        return this.closingHr - this.openingHr;
    }
    printToDom(): void{
        console.log(document.baseURI);
        console.log(document.bgColor);
        console.log(document.body);
        console.log(document.characterSet);
        console.log(document.charset);
        console.log(document.childElementCount);
        console.log(document.childNodes);
        console.log(document.children);
        console.log(document.compatMode);
        console.log(document.contentType);
        console.log(document.cookie);
    }
}

let theatre1: Theatre = new Theatre("BamBam",8,19,22);
theatre1.printToDom();
console.log(theatre1.calcOpenTime());
theatre1.setClosingHr(19);
theatre1.setOpeningHr(10);
console.log(theatre1.getClosingHr());
console.log(theatre1.getOpeningHr());
console.log(theatre1.name);
console.log(theatre1.totalSeats);

let theatre2: Theatre = new Theatre("TamTam",8,19);
theatre2.printToDom();
console.log(theatre1.calcOpenTime());
theatre2.setClosingHr(20);
theatre2.setOpeningHr(11);
console.log(theatre2.getClosingHr());
console.log(theatre2.getOpeningHr());
console.log(theatre2.name);
console.log(theatre2.totalSeats);
