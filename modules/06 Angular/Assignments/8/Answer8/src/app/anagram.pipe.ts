import { Pipe, PipeTransform } from '@angular/core';

@Pipe(
    {
        name: "areanagrams",
    }
)
export class AnagramPipe implements PipeTransform {
    transform(inputStrings : string) : string{
        
        let result = true;
        let str1 = inputStrings.split('?')[0].toLowerCase();
        let str2 = inputStrings.split('?')[1].toLowerCase();
        console.log(str1);
        console.log(str2);
        if( str1.length !== str2.length)
        {
            result = false;
        }
        else
        {
            let countArray : number[] = Array(255).fill(0);
        
            for(let i = 0;i < str1.length; i++)
            {
                countArray[str1.charCodeAt(i)]++;
                countArray[str2.charCodeAt(i)]++;
            }

            countArray.forEach(count =>
            {
                if(count % 2 !== 0)
                {
                    result = false;
                }
            })
        }
        
        return result ? `${inputStrings} are anagrams` : `${inputStrings} are not anagrams`;
    }

}