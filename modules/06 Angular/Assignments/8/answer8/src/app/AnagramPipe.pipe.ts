import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'AnagramPipe'
})
export class AnagramPipe implements PipeTransform{
    transform(str:string):string{
        let sentances = str.split("?");
        let firstSentance = sentances[0].split('');
        let secondSentance = sentances[1];
        for(let i=0; i<firstSentance.length;i++){
            if(secondSentance.indexOf(firstSentance[i])===(-1)){
                return "not anagrams";
            }
        }
        return "anagrams";
    }
}