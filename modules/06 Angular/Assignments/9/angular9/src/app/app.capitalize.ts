import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: 'capitalize'
})

export class CapitalizePipe implements PipeTransform {
    transform(str: string) {
        let newStr: string = "";
        let arrStr: string[] = str.split(" ");

        for (let str of arrStr) {
            newStr += str[0].toUpperCase() + str.substr(1) + ' ';
        }
        return newStr;
    }
} 