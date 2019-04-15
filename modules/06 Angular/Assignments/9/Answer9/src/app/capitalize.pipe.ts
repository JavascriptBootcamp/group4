import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name : 'capitalize'
})

export class Capitalize implements PipeTransform
{
    transform(str : string) : string
    {
        let strArr : string[] = str.split(' ');

        for(let i = 0 ; i < strArr.length; i++)
        {
            strArr[i] = strArr[i][0].toUpperCase() + strArr[i].substring(1);
        }
        return strArr.join(' ');
    }
} 