import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'normalbloodpressure'
})

export class BloodPressurePipe implements PipeTransform {
  transform(bloodPresureNumber: number) {
    return (bloodPresureNumber >= 80 && bloodPresureNumber <= 120) ? 'Normal Blood Presure' : 'Not Normal Blood Presure';
  }

} 