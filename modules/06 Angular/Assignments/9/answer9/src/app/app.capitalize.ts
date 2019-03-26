import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'capitalize'
})
export class Capitalize implements PipeTransform {

    transform(str: string): string {

        let str2arr:string[] = str.split(" ");
        let capArr:string[] = [];
        let str2cap:string = "";

        for (let indexAllstrs = 0; indexAllstrs < str2arr.length; indexAllstrs++) {
            
            str2cap = str2arr[indexAllstrs][0].toLocaleUpperCase() + str2arr[indexAllstrs].substring(1);
            capArr.push(str2cap);
            str2cap="";
        }
        return capArr.join(' ');

    }
}