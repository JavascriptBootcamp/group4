import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'normalPressure'})

export class BloodPressure implements PipeTransform {
  transform(bloodPressure: number): string {
    let str: string = "";
    str = (bloodPressure >= 80 && bloodPressure <= 120) ? "normal" : str;

    str = (bloodPressure <= 80 || bloodPressure >= 120) ? "not normal" : str;

    return str;
  }
}