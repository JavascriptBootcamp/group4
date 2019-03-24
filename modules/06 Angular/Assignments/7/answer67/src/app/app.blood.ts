import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'Blood'
})
export class BloodPipe implements PipeTransform {
    transform(val: number): boolean {


        var bloodPressure = 70;
        var isNormal = false;

        (val >= 80 && val <= 120) ? isNormal = true : isNormal;

        
        return isNormal;
    }
}