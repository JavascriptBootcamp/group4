import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'reverseStr'})
export class ReverseStrPipe implements PipeTransform {

   monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

  transform(value: number): string {
     return this.monthNames[value-1];
  }
}