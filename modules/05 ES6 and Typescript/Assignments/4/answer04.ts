interface IStringUtils<T> {
    getVolwels: (str: T) => number;
    removeChar: (str: T, pos: T) => string;
    incrementLetters: (str: T) => string;
}

class StringUtils implements IStringUtils<string> {
    constructor() {

    }
    public getVolwels(str: string): number {
        if (!(typeof str === 'string')) {
            throw "Current argument is not a string"
        }
        let volwelStr: string[] = str.match(/[auioe]/gi); //regex - g: matches the pattern multiple times, i: makes the regex case insensitive
        return volwelStr === null ? 0 : volwelStr.length;
    }

    public removeChar(str: string, pos: any): string {
        if (!(typeof str === 'string')) {
            throw "Current argument is not a string"
        }
        let newStr: string = str.replace(str.charAt(pos), '');
        return newStr;
    }

    public incrementLetters(str: string): string {
        if (!(typeof str === 'string')) {
            throw "Current argument is not a string"
        }

        let incrementedStr: string = '';

        for (let i: number = 0; i < str.length; i++) {
            if (str.toLowerCase().charCodeAt(i) > 96 && str.toLowerCase().charCodeAt(i) < 122) { //ascii lowercase alphabet.
                incrementedStr += String.fromCharCode(str.charCodeAt(i) + 1);
            }
            if (str.charCodeAt(i) == 32) {
                incrementedStr += ' '; //spaces
            }
            if (str.toLowerCase().charCodeAt(i) === 122) { //ascii 122 = 'z'
                incrementedStr += 'a';
            }
        }

        return incrementedStr;
    }
}

try {
    let str: string = 'The quick brown fox';
    let strUtils: StringUtils = new StringUtils();
    console.log(strUtils.getVolwels(str));
    console.log(strUtils.removeChar(str, 3));
    console.log(strUtils.incrementLetters(str));
}
catch (exeption) {
    console.log("Error:", exeption);
}