import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'areanagrams'
})
export class AreanagramsPipe implements PipeTransform {

  transform(value: string): boolean {

    if (this.checkAng(value) === 0)
      return true;
    else
      return false;
  }
  checkAng(val: string) {

    let str = val.split("?");
    let str1 = str[0].toLowerCase().match(/[a-z]/gi).sort().join("");
    let str2 = str[1].toLowerCase().match(/[a-z]/gi).sort().join("");

    return str1.localeCompare(str2);
  }
}
