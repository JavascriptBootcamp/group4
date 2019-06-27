import { MyIWord } from './MyIWord';


export class Word implements MyIWord {
    public lenght: number;
    private chars: string;

constructor( chars:string)
{
    this.chars=chars;
    this.setLenght();
}
    public setLenght() {
        this.lenght = this.chars.length;
    }
}

export const findLongestString =(sentence)=>{
let arr=sentence.split(' ');
let wordsArr=[];
let max={
    maxLenghth:0,
    theString:''
};
arr.forEach((value,index) => {
    wordsArr.push(new Word(value));
    wordsArr[index].setLenght();
    if(wordsArr[index].lenght>max.maxLenghth)
    {
        max.maxLenghth=wordsArr[index].lenght;
        max.theString=value;
    }
});
return max.theString;
}

const strMaxLenght=findLongestString('Web Development Tutorial');
console.log(strMaxLenght);