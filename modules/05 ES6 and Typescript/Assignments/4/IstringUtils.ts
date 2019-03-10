export interface iStringUtils<T>{
    getVowels(str: string): number;
    // removeChar(str: string,pos :number): string;
    removeChar(str: string,pos :T): string;    
    incrementLetters(str: string): string;
}