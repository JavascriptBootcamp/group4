import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'normalbloodpressure'
})
export class NormalbloodpressurePipe implements PipeTransform {

  transform(bloodpressure: number): boolean {

    return (bloodpressure >= 80 && bloodpressure <= 120) ? true : false;
  }

}