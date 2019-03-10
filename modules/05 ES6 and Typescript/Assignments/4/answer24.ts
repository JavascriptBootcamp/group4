
class RandomWord
{
    charsArray:string[];
    constructor( charsArray:string[])
    {
        if (typeof charsArray === 'object'){
            this.charsArray = charsArray;
        }
        else {
            console.log ('"chars" should be an array.');
        }

    }
    
    randomize (length:number):string{
        if (typeof length === 'number')
        {
            let text:string = "";
            let possible:string = this.charsArray.join("");
            for (let i = 0; i < length; i++)
                text += possible.charAt(Math.floor(Math.random() * possible.length));
            return text;
        } 
        else {
            console.log('"length" should be a number.');
        }
    }


}
 


let word1 = new RandomWord(['a','b','c']);
console.log(word1.randomize(10));
