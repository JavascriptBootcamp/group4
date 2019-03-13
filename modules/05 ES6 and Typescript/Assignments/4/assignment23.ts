interface IWord{
    chars: string;
    length: number;
    findLongestString(string):string;
}

class Word implements IWord{
    constructor(public chars:string,public length:number){
        this.chars=chars;
        this.length = this.chars.length;
    };
}


function Word(chars){
    //this.length;
    this.setLength = function(){
        this.length = chars.length;
    }
}

function findLongestString(sentence){
    var arr = sentence.split(' ');
    var wordsArr = [];
    var max = {maxLength: 0, theString: ''};
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

var strMaxLength = findLongestString('Web Development Tutorial');

console.log(strMaxLength);