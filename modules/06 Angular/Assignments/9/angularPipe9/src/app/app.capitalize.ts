import {Pipe, PipeTransform} from '@angular/core';

@Pipe ({
    name: 'capitalize'
})

export class CapitalizePipe implements PipeTransform {
    transform(str: string): string {
        let arr: string [] = str.split(' ');
        let newarr = arr.map(word => {
            let code = word.charCodeAt(0);
            let firstCode = (code >= 97 && code <= 122) ? (code - 32):code;
            word = String.fromCharCode(firstCode) + word.substring(1);
            return word;
        });
        str = newarr.join(' ');
        return str;
    }
}