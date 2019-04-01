import {Pipe, PipeTransform} from '@angular/core'

@Pipe({
    name: 'normalbloodpressure'
})

export class IsNormalPipe implements PipeTransform {
    transform(val: number) : string {
        return (val >= 80 && val <= 120) ? 'normal' : 'abnormal';
    }
}