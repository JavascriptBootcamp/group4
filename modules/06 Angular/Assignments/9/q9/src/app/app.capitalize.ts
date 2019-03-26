import{Pipe, PipeTransform} from '@angular/core'

@Pipe({
    name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform{
    transform(str: string) : string{
        let newStr = "";
        for(let word of str.split(' ')){
            newStr += word.substring(0,1).toUpperCase() + word.substring(1) + ' ';
        }
        return `Input: ${str}, output: ${newStr}`;
    }
}