import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: 'anagram'
})

export class AnagramPipe implements PipeTransform {
    transform(str: string) {
        let arrStr: string[] = str.toLowerCase().split('?');
        let str1 = arrStr[0];

        if (arrStr[0].length !== arrStr[1].length)
            return `${str1} and ${arrStr[1]} false`;

        for (let char of arrStr[1]) {
            let index: number = arrStr[0].indexOf(char);
            if (index === -1) {
                return `${str1} and ${arrStr[1]} false`;
            }
            else {
                arrStr[0] = arrStr[0].replace(arrStr[0][index], "");
            }
        }

        return `${str1} and ${arrStr[1]} true`;
    }

} 