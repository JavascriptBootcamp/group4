import {Pipe, PipeTransform} from '@angular/core'

@Pipe({name: 'capitalize'})
export class CapitalizePipe implements PipeTransform{
    transform(word: string): string{
        return `${word.charAt(0).toUpperCase() + word.slice(1)}`;
    }
}