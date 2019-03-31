import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'sqrtnormalbloodpressure'
})
export class NormalBloodPressure implements PipeTransform {
    transform(val: number) : string{
        if(this.bloodPerssuresCheck(val))
          return "Normal"
        else
         return "Not Normal"
    }
    bloodPerssuresCheck(bloodPressure: number): boolean {

        let isNormal = false;
    
        (bloodPressure >= 80 && bloodPressure <= 120) ? isNormal = true : isNormal;
    
        (bloodPressure <= 80 || bloodPressure >= 120) ? isNormal : isNormal = true;
    
        return isNormal
      }
}