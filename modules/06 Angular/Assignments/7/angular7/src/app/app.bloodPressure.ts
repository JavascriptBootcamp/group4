import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'bloodPressure'
})

export class BloodPressurePipe implements PipeTransform {
  transform(num: number) {
    return (num >= 80 && num <= 120) ? 'Normal' : 'Not Normal';
  }

} 