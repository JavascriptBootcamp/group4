import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'capitalize' })
export class capitalPipe implements PipeTransform {
    transform(str: string): string {
        let newArr = str.split(" ");
        for (var i = 0; i < newArr.length; i++) {
            newArr[i]=newArr[i].charAt(0).toUpperCase() + newArr[i].slice(1);;
            console.log(newArr[i]);
        }
        str =newArr.join(" ");
        return str;
    }
}