import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'areanagrams' })
export class AnagramsPipe implements PipeTransform {
    transform(firstStr: string, secondStr: string) {
        let isAnagrams: boolean = true;
        let hist: number[] = [];

        for (let i = 0; i < firstStr.length; i++) {
            let char: any = firstStr[i];
            char = char.toUpperCase();
            if (this.isLetter(char) || !isNaN(char)) {
                if (char in hist) {
                    hist[char]++;
                }
                else {
                    hist[char] = 1;
                }
            }
        }

        for (let i = 0; i < secondStr.length; i++) {
            let char: any = secondStr[i];
            char = char.toUpperCase();
            if (this.isLetter(char) || !isNaN(char)) {
                if (char in hist) {
                    hist[char]--;
                }
                else {
                    isAnagrams = false;
                }
            }
        }

        for (let key in hist) {
            if (hist[key]) {
                isAnagrams = false;
            }
        }

        return isAnagrams ? `"${firstStr}" and "${secondStr}" true` : `"${firstStr} and "${secondStr}" false`;
    }

    isLetter(c : any) : boolean{
        return c.toUpperCase() !== c.toLowerCase();
    }
}