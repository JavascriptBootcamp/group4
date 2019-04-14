import { PipeTransform, Pipe } from '@angular/core';


@Pipe(
{
    name : 'normalbloodpressure'
})
export class NormalBloodPressurePipe implements PipeTransform
{
    transform(bloodPressure : number)
    {
        return (bloodPressure >= 80 && bloodPressure <= 120) ? 'Normal' : '';
    }
}