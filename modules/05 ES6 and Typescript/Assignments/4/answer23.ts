interface IWord{
    setLength:()=>void;
    findLongestString:(sentence:string)=>string;
}
class Word implements IWord{
    public length:number;
    public chars:string;
    constructor(chars:string){
        this.chars = chars;
    }
    public setLength(){
        this.length=this.chars.length;
    };
    public findLongestString(){
        let sentence:string;
        sentence=this.chars;
        let arr = sentence.split(' ');
        let wordsArr = [];
        let max = {maxLength: 0, theString: ''};
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
    
}

let newWord=new Word(('Web Development Tutorial'))
let strMaxLength = newWord.findLongestString();

console.log(strMaxLength);
