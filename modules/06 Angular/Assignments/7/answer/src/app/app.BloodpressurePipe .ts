import {Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name:'normalbloodpressure' 
  })

  export class BloodpressurePipe implements PipeTransform{
      transform(bloodPressure: number ):string{
          return (bloodPressure>=80 && bloodPressure<= 120)? 'has normal blood pressure':'doesnt have normal blood pressure';
      }
  }