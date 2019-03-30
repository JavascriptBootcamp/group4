import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'anagrams'
})

export class AnagramsPipe implements PipeTransform {

  transform(str: string): string {
    let charsArr: string[] = str.replace(" ","").toLowerCase().split('?');
    //console.log(charsArr);

    if (charsArr[0].length != charsArr[1].length)  return "are not anagrams";

    for (let char of charsArr[0]) {
        if (!charsArr[1].includes(char)) return "aren't anagrams";    
    }

    return "are anagrams";
  }

}
