import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: "anagrams"
})

export class anagrams implements PipeTransform {
    transform(value: string): boolean {
        let questions: string[] = value.split('?');
        let arr: Array<String> = [];
        let index = 0;
        for (let val of questions) {
            for (let index of val) {
                arr.push(index);
            }
        }
        arr.sort();
        for (let val of arr) {
            if (arr[index] !== arr[index + 1]){
                return false;
            }
            index+=2;
        }
        return true;
    }
}