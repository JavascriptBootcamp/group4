import { PipeTransform, Pipe } from '@angular/core';


@Pipe({
name:'areanagrams'
})

export class AnagramsPipe implements PipeTransform{
     isAnagrams:boolean;
    arr : Array<string>;
transform(sentence :string){
   

    this.arr = sentence.split("?");
    

    let str1:string[];
    let str2:string[];
    str1=this.arr[0].toLocaleLowerCase().split("");
    str2=this.arr[1].toLocaleLowerCase().split("");

    if (str1.length !== str2.length) 
    return false; 
str1.sort( (a,b)=> (a> b) ? 1 : ((b> a) ? -1 : 0));

str2.sort( (a,b)=> (a> b) ? 1 : ((b> a) ? -1 : 0));
for (let i = 0; i < str1.length ; i++) 
    if (str1[i] != str2[i]) 
        return false; 

return true; 
} 
}