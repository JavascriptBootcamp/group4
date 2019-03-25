import {Pipe,PipeTransform} from '@angular/core'

@Pipe({
    name:'areanagrams' 
})
export class anagramPipe implements PipeTransform{
transform(val:string):string{

    const strArr = val.split("?");
    const str_a = strArr[0].toLowerCase().trim().split("!").join("");
    const str_b = strArr[1].toLowerCase().trim().split("!").join("");
    if(str_a.length === str_b.length){
       
        for(let i=0;i<str_a.length;i++){
            if(!str_a.split("").includes(str_b[i])){
                return `"${strArr[0]}" and "${strArr[1]}" false `;
            }
        }
    }
    else{
        return `"${strArr[0]}" and "${strArr[1]}" false `;
    }
    return `"${strArr[0]}" and "${strArr[1]}" true `;
}

}