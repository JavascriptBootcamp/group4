class Word {
    length:number;
    constructor(chars){
        this.length = chars.length;
   }
}

const findLongestString = (sentence:string): string => {
    const arr:string[] = sentence.split(' ');
    const wordsArr: any = [];
    const max:any = {maxLength: 0, theString: ''};
    arr.forEach((value, index) => {
        wordsArr.push(new Word(value));
        wordsArr[index].setLength();
        if (wordsArr[index].length > max.maxLength){
            max.maxLength = wordsArr[index].length;
            max.theString = value;
        }
    });
    return max.theString;
}

let strMaxLength = findLongestString('Web Development Tutorial');

console.log(strMaxLength);