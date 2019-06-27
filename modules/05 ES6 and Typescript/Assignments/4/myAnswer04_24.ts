import {iRandomWord} from './iRandomWord';
export class RandomWord implements iRandomWord {
    private charsArray: Array<string>;
    constructor(charsArray: Array<string>) {
        
        if(this.isArray(charsArray))
        {
            this.charsArray = charsArray;
        }

    }
    public isArray(chars) {
        if (typeof chars === 'object') {
            return true;
        }
        else {
            console.log('"chars" should be an array.');
            return false;
        }
    }

    public randomize(length:number){
        if (typeof length === 'number')
        {
            let text = "";
            let possible = this.charsArray.join("");
            for (let i = 0; i < length; i++)
                text += possible.charAt(Math.floor(Math.random() * possible.length));
            return text;
        } 
        else {
            console.log('"length" should be a number.');
        }
    }
    }

    let word1= new RandomWord(['a','b','c']);
    console.log(word1.randomize(10));