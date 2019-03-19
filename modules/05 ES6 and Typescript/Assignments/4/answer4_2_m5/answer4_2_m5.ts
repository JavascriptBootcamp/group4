/*

function Word(str){
    this.length;
    this.setLength = function(){
     this.length = str.length;
    }
}

function findLongestString(sentence){

var maxLength = 0;
var theBigSizeWord =  "";
 splitedWords = sentence.split(" ");

 for (var i = 0 ; i < splitedWords.length ; i++){

    var word =  new Word(splitedWords[i]);
    word.setLength();

    if(word.length  >  maxLength){
      maxLength = word.length;
      theBigSizeWord = splitedWords[i];
    }
 }
 
 console.log(theBigSizeWord);
}

findLongestString('Web Development Tutorial');
*/

class Word {

    length:number;
    str:string;


    constructor(str:string){
        this.str = str;
        this.length = this.setLength();
    }

    setLength():number{
        return this.str.length;
    }
}
    function findLongestString(sentence:string):string{

        let maxLength:number = 0;
        let theBigSizeWord:string =  "";
        let  splitedWords:string[] = sentence.split(" ");
        
         for (let i = 0 ; i < splitedWords.length ; i++){
        
            let word =  new Word(splitedWords[i]);
            word.setLength();
        
            if(word.length  >  maxLength){
              maxLength = word.length;
              theBigSizeWord = splitedWords[i];
            }
         }
         
         return theBigSizeWord;

    }

   console.log("The big Word is : ", findLongestString('Web Development Tutorial'));