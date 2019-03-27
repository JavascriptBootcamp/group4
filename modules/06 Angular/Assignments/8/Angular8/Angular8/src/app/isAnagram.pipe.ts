import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'isAnagram'
})
export class isAnagramPipe implements PipeTransform {
    transform(str: string): boolean {
        let strToCheck:string[] = str.toLowerCase().split('?');
        for(let letter of strToCheck[0].split('')){
            if(!strToCheck[1].includes(letter)){
                return false;
            }
        }
        return true;
    }
} 