import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'anagrams'
})
export class AnagramsPipe implements PipeTransform {
    transform(sentence: string) : boolean {

        let words = sentence.split('?');
        let firstWord=words[0];
        let secWord=words[1];
        let ans=true;
        for (let index = 0; index < secWord.length; index++) {
            if(secWord.includes(firstWord[index])===false)
            {
                ans=false;
                break;
            }
         //   const element = firstWord[index];
            
        }
     //   sentence.includes(word)
        return ans;
    }
}