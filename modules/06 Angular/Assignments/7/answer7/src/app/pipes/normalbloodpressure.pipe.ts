import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'normalbloodpressure'
})

export class NormalbloodpressurePipe implements PipeTransform {
  transform(value: any): any {
    return (value >= 80 && value <= 120) ? 'normal' : 'NOT normal';
  }
}
