import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'anagrams' })
export class anagramsPipe implements PipeTransform {
    transform(str: string): string {
        
        let arrStr: string[] = str.replace(" ","").toLowerCase().split('?');
        for (let char of arrStr[0]) {
            if (!arrStr[1].includes(char)) {
                return "no anagrams";
            }
        }
        if (arrStr[0].length != arrStr[1].length)
            return "no anagrams";

        return "anagrams";
    }
}