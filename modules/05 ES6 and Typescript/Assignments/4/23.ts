class Word{
    private chars: string;
    private length: number;
    constructor(chars: string){
        this.chars = chars;
    }

    public setLength(): void {
        this.length = this.chars.length;
    }

    public getLength(): number {
        return this.length;
    }
}

function findLongestString(sentence): string{
    let arr = sentence.split(' ');
    let wordsArr = [];
    let max = {maxLength: 0, theString: ''};
    arr.forEach((value, index) => {
        wordsArr.push(new Word(value));
        wordsArr[index].setLength();
        if (wordsArr[index].getLength() > max.maxLength){
            max.maxLength = wordsArr[index].getLength();
            max.theString = value;
        }
    });
    return max.theString;
}   

 let strMaxLength = findLongestString('Web Development Tutorial');

 console.log(strMaxLength);
 //C:\Program Files\nodejs\node_modules\typescript\bin\tsc