class RandomWord <T>{
    private text: string;
    private possible: string;
    constructor(charsArray: string[]) {
        this.text = "";
        this.possible = charsArray.join("");
    }

    randomize = (length): string =>{
        if (typeof length === 'number')
        {

            for (var i = 0; i < length; i++)
                this.text += this.possible.charAt(Math.floor(Math.random() * this.possible.length));
            return this.text;
        } 
        else {
            console.log('"length" should be a number.');
        }
    }
}

const word1:RandomWord <any> = new RandomWord(['a','b','c']);
console.log(word1.randomize(10));