import { IWord } from "./IWord";
class Word implements IWord{

    word : string;
    length : number;

    constructor(word : string)
    {
        this.word = word;
        this.length = word.length;
    }

    public setLength()
    {
        this.length = this.word.length;
    }

}

function findLongestString(sentence : string)
{
    var arr:string[] = sentence.split(' ');
    var wordsArr:Word[] = [];
    var maxWord : Word = new Word("");
    arr.forEach((value, index) => {
        wordsArr.push(new Word(value));
        wordsArr[index].setLength();
        if (wordsArr[index].length > maxWord.length){
            maxWord.length = wordsArr[index].length;
            maxWord.word = value;
        }
    });
    return maxWord.word;
}

let strMaxLength = findLongestString('Web Development Tutorial');

console.log(strMaxLength);
