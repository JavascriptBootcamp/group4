import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'capitalize'
})
export class capitalize implements PipeTransform {
    transform(str: string): string {
        return str.split(' ').map(s => s.replace(s[0], s[0].toUpperCase())).join(' ');
    }

}  