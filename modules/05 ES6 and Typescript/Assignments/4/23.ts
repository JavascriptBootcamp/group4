class Word{
    private chars: string;
    public length: number;
    constructor(chars:string){
        this.chars = chars;
    }
    setLength ():void {
        this.length = this.chars.length;
    }

}

function findLongestString(sentence):number{
    let arr: string[] = sentence.split(' ');
    let wordsArr: Word[] = [];
    let max: any = {maxLength : 0, theString : ''};
    arr.forEach((value:string, index:number) => {
        wordsArr.push(new Word(value));
        wordsArr[index].setLength();
        if (wordsArr[index].length > max.maxLength){
            max.maxLength = wordsArr[index].length;
            max.theString = value;
        }
    });
    return max.theString;
}

let strMaxLength: number = findLongestString('Web Development Tutorial');
console.log(strMaxLength);
