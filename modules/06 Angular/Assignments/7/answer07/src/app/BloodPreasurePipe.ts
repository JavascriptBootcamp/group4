import { Pipe, PipeTransform } from '@angular/core';


@Pipe({ name: 'isNormalPreasure' })
export class BloodPreasurePipe implements PipeTransform {

    transform(bloodPressure: number): string {
        return bloodPressure >= 80 && bloodPressure <= 120 ? 'Normal' : '!Normal';
    }
}