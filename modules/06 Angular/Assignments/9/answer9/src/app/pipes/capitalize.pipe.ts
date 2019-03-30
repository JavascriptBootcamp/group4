import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})

export class CapitalizePipe implements PipeTransform {

  transform(sentence: string) : string{
    let capitalizedSentence = "";

    for(let word of sentence.split(' ')) {
        capitalizedSentence += word.substring(0,1).toUpperCase() + word.substring(1) + ' ';
    }

    return capitalizedSentence;   
  }

}
