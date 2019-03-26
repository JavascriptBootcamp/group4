import {Pipe, PipeTransform} from '@angular/core'

@Pipe({
    name: 'areanagrams'
})

export class AnagramsPipe implements PipeTransform{
    transform(str: string): string{
        let index = str.indexOf('?');
        const str1 = str.slice(0,index);
        const str2 = str.slice(index + 1,str.length);

        if(str1.length !== str2.length)
            return `${str1} and ${str2} false`;
        for(let c of str1){
            if(str2.split(c).length !== str1.split(c).length)
                return `${str1} and ${str2} false`;
        }
        return `${str1} and ${str2} true`;
    }
}