import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
    name: 'normalbloodpressure'
})
export class normalbloodpressurePipe implements PipeTransform {
    transform(bloodPressure: number): boolean {
        debugger
        if (bloodPressure >= 80 && bloodPressure <= 120) {
            return true;
        }
        else {
            return false;
        }

    }
}