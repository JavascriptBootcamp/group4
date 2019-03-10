interface Imax {
    maxLength : number,
    theString : string
}

class Word{
    public str : string
    constructor(str:string){
        this.str = str;
    }
    public setLength():number {return this.str.length;}
}

const findLongestString = (sentence:string):string =>{
    const arr:Array<string> = sentence.split(' ');
    const wordsArr:Array<Word> = [];
    const max:Imax = {maxLength :  0, theString: ''};
    arr.forEach((value:string, index:number) => {
        const word = new Word(value);
        wordsArr.push(word);
        if ( wordsArr[index].setLength() > max.maxLength){
            max.maxLength =  wordsArr[index].setLength();
            max.theString =  wordsArr[index].str;
        }
    });
    return max.theString;
}