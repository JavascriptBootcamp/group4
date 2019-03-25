import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'bloodpipe'})
export class bloodPipe implements PipeTransform {
  transform(value: number): string {
    let isNormal ="Blood Pressure Is NO Normal";
    (value >= 80 && value <= 120) ? isNormal = "Blood Pressure is Normal" : isNormal;
    return isNormal;
  }
}
