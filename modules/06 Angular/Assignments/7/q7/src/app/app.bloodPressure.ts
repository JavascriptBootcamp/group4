import{Pipe, PipeTransform} from '@angular/core'


@Pipe({
    name: 'bloddPressure'
})

export class BloodPressurePipe implements PipeTransform{
    transform(val: number){
        return (val >= 80 && val <= 120) ? 'normal' : 'bad';
    }

}