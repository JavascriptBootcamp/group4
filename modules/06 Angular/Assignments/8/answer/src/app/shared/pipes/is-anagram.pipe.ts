import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isAnagram'
})
export class IsAnagramPipe implements PipeTransform {

  transform(str1: string, str2: string): boolean {
    let base_str = str1.toLowerCase().replace(" ","");
    let str_for_check = str2.toLowerCase().replace(" ","");
    let index:number;

    for (const char of base_str) {
      //check if str_for_check char have all the chars of base_str 
      index = str_for_check.indexOf(char);
      if(index!== -1) {
        //remove that char
        str_for_check = str_for_check.substring(0, index) + '' + str_for_check.substring(index + 1);
      }
    }
    //supposed to be empty 
    return str_for_check.length===0;
  }

}
