class Word
{
      length:number;
      constructor(chars:string)
        {
            this.length=chars.length;
        }
   
}



class FindLongestString
{
     findLongestString(sentence:string):string{
        let arr:string[] = sentence.split(' ');
        let wordsArr :Word[]  = [];
        let max = {maxLength: 0, theString: ''};
        arr.forEach((value, index) => {
            
            wordsArr.push(new Word(value));
            // wordsArr[index].setLength();
            if (wordsArr[index].length > max.maxLength){
                max.maxLength = wordsArr[index].length;
                max.theString = value;
            }
        });
        return max.theString;
    }



}




let findLongestStringobj:FindLongestString =new FindLongestString();
let strMaxLength:string =findLongestStringobj.findLongestString('Web Development Tutorial');

console.log(strMaxLength);
