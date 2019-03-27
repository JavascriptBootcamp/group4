import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(str: string): string {
    let new_str = str.split(" ");

    for (let i = 0; i < new_str.length; i++) {
      let word = new_str[i];
      new_str[i] = word.charAt(0).toUpperCase() + word.slice(1);
    }
    
    return new_str.join(" ");
  }

}
