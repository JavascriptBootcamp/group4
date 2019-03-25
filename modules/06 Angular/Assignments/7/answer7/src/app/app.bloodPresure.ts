import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'normalbloodpressure'
})
export class Blood implements PipeTransform {
    transform(val: number): string {
        if (val >= 80 && val <= 120)
            return "normal"
        else
            return "not normal";
    }
}