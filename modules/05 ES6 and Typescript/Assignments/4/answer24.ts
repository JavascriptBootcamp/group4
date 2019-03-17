class RandomWord {

    chars: string[];

    constructor(chars: string[]) {
        this.chars = chars;
    }

    private checkCharsForOnlyStrings():boolean {
        
        for (let iterator of this.chars) {
            if (typeof iterator === "string")
                return false;
        }
        return true;
    }
    randomize(length: number): string {
        if (typeof this.chars === 'object') {
            if (typeof length === 'number') {
                if (this.checkCharsForOnlyStrings()) { 
                    return `"chars" should include only strings`;
                } else {
                    let text = "";
                    let possible = this.chars.join("");
                    for (let i = 0; i < length; i++)
                        text += possible.charAt(Math.floor(Math.random() * possible.length));
                    return text;
                }

            }
            else {
                return '"length" should be a number.';
            }
        }
        else {
            return '"chars" should be an array.';
        }
    }

}

var word1 = new RandomWord(['a', 'b', 'c']);
console.log(word1.randomize(10));