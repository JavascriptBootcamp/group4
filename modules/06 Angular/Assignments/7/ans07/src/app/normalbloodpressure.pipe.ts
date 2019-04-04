import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'normalbloodpressure'
})

export class NormalbloodpressurePipe implements PipeTransform {
  transform(bloodPressure:number): string{
      if(bloodPressure>= 80 && bloodPressure <= 120)
          return "normal";
      else
          return "not normal";
  }
} 