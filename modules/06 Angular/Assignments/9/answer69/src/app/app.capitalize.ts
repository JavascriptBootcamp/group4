import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {
    transform(word: string) : string {

            return word.replace(word[0],word[0].toUpperCase());
    }
}