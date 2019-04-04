import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(str:string): string {
    let strArr= str.split(" ")
    let ans=""
    for(let i=0;i<strArr.length;i++){
      ans+=strArr[i][0].toUpperCase()+strArr[i].slice(1)+" "
    }
    return ans;
  }

}
