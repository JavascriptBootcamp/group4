import {Pipe , PipeTransform} from '@angular/core';

@Pipe({
    name : "normalbloodpressure"
})

export class normalbloodpressure implements PipeTransform{
    transform(value:number) : string{
        return value >=80 && value <= 120 ? "is normal" : "is not normal";
    }
}