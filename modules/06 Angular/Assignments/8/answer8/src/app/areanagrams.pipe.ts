import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: 'areanagrams'
})
export class AreanagramsPipe implements PipeTransform {
    transform(value: string): string {
        let areAnagrams: string;
        let arr: string[] = value.split("?");
        let lettersArr1: string[] = arr[0].toLowerCase().replace(/!/g, "").split("").sort();
        let lettersArr2: string[] = arr[1].toLowerCase().replace(/!/g, "").split("").sort();
        for (let i = 0; i < lettersArr1.length; i++) {
            if (lettersArr1.length === lettersArr2.length) {
                if (lettersArr1[i] === lettersArr2[i]) {
                    areAnagrams = `"${arr[0]}" and "${arr[1]}" true`;
                }
                else {
                    return `"${arr[0]}" and "${arr[1]}" false`;
                }
            }
            else {
                return `"${arr[0]}" and "${arr[1]}" false`;
            }
        }
        return areAnagrams;
    }
}