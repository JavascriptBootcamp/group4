import {Pipe,PipeTransform} from '@angular/core'

@Pipe({
    name:'capitalize'
})
export class capitalizePipe implements PipeTransform{
    transform(val:string):string{
        const strArr = val.trim().split(" ");
        let str = "";
        for(let i=0;i<strArr.length;i++){
            str += strArr[i][0].toUpperCase() + strArr[i].slice(1,strArr[i].length) + " ";
        }
        return str;
    }
}