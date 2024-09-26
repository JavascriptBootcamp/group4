import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberToMonth'
})
export class NumberToMonthPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log("value:",value,"args:",args);
    const convertionObj = {
      "1": "January",
      "2": "February",
      "3": "March",
      "4": "April",
      "5": "May",
      "6": "June",
      "7": "July",
      "8": "August",
      "9": "September",
      "10": "October",
      "11": "November",
      "12": "December"
    }
    return convertionObj[value];
  }

}
