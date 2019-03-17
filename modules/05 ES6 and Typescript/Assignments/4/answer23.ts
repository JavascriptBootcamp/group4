class Word{
    
    length:number;

    private setLength(chars:string) :number {
        return chars.length;
    }
    
    constructor (chars:string) {
        this.length = this.setLength(chars);
    }
    
}

function findLongestString(sentence:string):string{
    let arr = sentence.split(' ');
    let wordsArr = [];
    let max = {maxLength: 0, theString: ''};
    arr.forEach((value, index) => {
        wordsArr.push(new Word(value));
        if (wordsArr[index].length > max.maxLength){
            max.maxLength = wordsArr[index].length;
            max.theString = value;
        }
    });
    return max.theString;
}

let strMaxLength = findLongestString('Web Development Tutorial');

console.log(strMaxLength);
