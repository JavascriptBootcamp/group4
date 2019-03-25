import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'isAnagram'
})
export class Anagram implements PipeTransform {

    transform(param1: string, param2: string): boolean {

        let found: boolean;
        let str_no_white_chars: string = param2.replace(" ", "");
        let val2: string[] = str_no_white_chars.split("");
        str_no_white_chars = param1.replace(" ", "");
        let val1: string[] = str_no_white_chars.split("");

        for (let index_val1 = 0; index_val1 < val1.length; index_val1++) {
            found = false;
            for (let index_val2 = 0; index_val2 < val2.length && !found; index_val2++) {

                if (val1[index_val1] === val2[index_val2].toLocaleLowerCase() ||
                    val1[index_val1] === val2[index_val2].toLocaleUpperCase()) {
                    val2.splice(index_val2, 1);
                    found = true;
                }
            }
            if (!found) {
                return false;
            }
        }
        return true;
    }
}