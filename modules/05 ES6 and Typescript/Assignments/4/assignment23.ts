interface ISentence{
    sentence: string;
    findLongestString():string;
}

class Sentence implements ISentence{
    sentence: string;
    constructor(message:string){
        this.sentence=message;
    }
    findLongestString(){
        let arr = this.sentence.split(' ');
        let max = arr[0];
        for(let word of arr){
            if(word.length>max.length)
                max = word;
        }
        return max;
    }
}

let sentence:Sentence = new Sentence('Web Development Tutorial');

console.log(sentence.findLongestString());