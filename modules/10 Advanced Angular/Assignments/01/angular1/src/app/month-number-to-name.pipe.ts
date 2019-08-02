import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'monthNumberToName'
})
export class MonthNumberToNamePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let monthNumber = value - 1;
    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    return monthNames[monthNumber];
  }
}
