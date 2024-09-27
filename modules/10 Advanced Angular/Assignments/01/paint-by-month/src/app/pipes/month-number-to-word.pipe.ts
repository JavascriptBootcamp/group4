import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'monthNumberToWord'
})


export class MonthNumberToWordPipe implements PipeTransform {

  transform(value: number): string {
    let month: string = "";
        
    const monthNumberWordMap = {
      1: 'January', 2: 'February', 3: 'March', 4: 'April',
      5: 'May', 6: 'June', 7: 'July', 8: 'August',
      9: 'September',  10: 'October', 11: 'November', 12: 'December'
    }

    month = monthNumberWordMap[value];

    return month;
 
  }

}
