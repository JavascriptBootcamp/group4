import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: "capitalize"
})

export class capitalize implements PipeTransform {
    transform(value: string): string {
        let arr: Array<String> = [];
        let newarr: Array<String> = [];
        arr = value.split(' ');
        newarr = arr.map((word) => {
            return word[0].toUpperCase() + word.slice(1);
        });
        return newarr.join(' ');
    }
}