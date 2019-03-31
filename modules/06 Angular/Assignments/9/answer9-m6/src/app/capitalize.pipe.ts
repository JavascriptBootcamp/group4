import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: string): string {

    let caplitizedStr=[];
    let splitedStr = value.split(" ");
     for(let str of splitedStr )
       caplitizedStr.push(str.charAt(0).toUpperCase() + str.slice(1))
    return caplitizedStr.join(" ");
  }

}
