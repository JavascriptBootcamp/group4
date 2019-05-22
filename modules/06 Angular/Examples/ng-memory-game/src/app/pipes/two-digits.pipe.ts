import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'twoDigits'
})
export class TwoDigitsPipe implements PipeTransform {

  transform(value: any): any {
    return String(value).padStart(2, '0');  
  }

}
