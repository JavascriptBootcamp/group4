import { IWord } from "./Iword";
 
 class Word implements IWord{
    chars: string;

    constructor(chars: string) {
        this.chars = chars;
    }

    public setLength(): number {
        return this.chars.length;
    }

    public findLongestString(str: string) {
        var words: string[] = str.split(" ");
        //console.log('String words: ', words);

        var longestWord: string = words[0];
        
        for (var i: number = 1; i < words.length; i++) {
            var wordIns = new Word(words[i]);
            
            wordIns.setLength(); // Activate setLength function
    
            if ( longestWord.length < (wordIns.setLength()) ) {
                longestWord = words[i];
            }
        }
        
        return longestWord;
    }
}

let wordObj: Word = new Word("ad");
console.log('The longest word:', wordObj.findLongestString("David klkllkl Lev ggagagagag"));
