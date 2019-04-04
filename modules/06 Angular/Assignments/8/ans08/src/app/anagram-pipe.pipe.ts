import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'anagramPipe'
})
export class AnagramPipePipe implements PipeTransform {

  transform(str:string): string {
    //let return:string ="";
    let input=str.split("?")
    let firststr=input[0];
    let secondstr=input[1];
    firststr=firststr.split("").sort().join('')
    secondstr=secondstr.split("").sort().join('')
    if(firststr===secondstr){
      return "true";
    }else{
      return "false"
    }

  }

}
