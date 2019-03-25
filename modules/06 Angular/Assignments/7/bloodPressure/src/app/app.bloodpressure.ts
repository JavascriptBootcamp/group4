import {Pipe,PipeTransform} from '@angular/core'

@Pipe({
    name:'normalbloodpressure'
})
export class bloodpressure implements PipeTransform{
    transform(val:number):string{
        let isNormal = false;
        (val >= 80 && val <= 120) ? isNormal = true : isNormal;
        (val <= 80 || val >= 120) ? isNormal : isNormal = true;
         return isNormal?" has Normal blood Pressure":"has Not Normal blood Pressure";
    }
}