export interface iStringUtils <T> {
    getVowels: (str:string) => number;
    removeChar: (str:string , pos:T) => string;
    incrementLetters: (string:string) => string;
}