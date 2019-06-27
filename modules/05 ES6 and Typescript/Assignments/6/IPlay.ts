export interface IPlay{
    play(song:string):void;
    next():void;
    prev():void;

}

export enum Instrument {
    Guitar = "Guitar",
    Drums = "Drums",
    Bass = "Bass",
    None = "None"
}

export enum Color{
    Red="Red", 
    Blue="Blue",
    Yellow= "Yellow"
    
}