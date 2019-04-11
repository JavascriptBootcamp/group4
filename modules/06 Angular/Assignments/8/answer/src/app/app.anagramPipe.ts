import {Pipe, PipeTransform} from '@angular/core';
@Pipe({
    name:'anagram'
})
export class AnagramPipe implements PipeTransform{
    
    
    transform(inputString:string):boolean{
        let arr:string[];
        let result:boolean=true;
        arr=inputString.split('?');
        arr.forEach((a)=>a.toLowerCase());
        let s1=arr[0].split('');
        let s2=arr[1];
        s1.forEach( (s)=>{
            if(s2.indexOf(s)===-1)
            {
                result=false;}
        });
        return result;
    }
}