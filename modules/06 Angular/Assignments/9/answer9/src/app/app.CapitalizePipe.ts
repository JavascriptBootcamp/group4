import { PipeTransform, Pipe } from '@angular/core';


@Pipe({
        name:'capitalize'
})


export class CapitalizePipe implements PipeTransform{
    strArr:string[];
transform(str :string){

this.strArr = str.split(" ");
console.log(this.strArr);
for(let i=0; i<this.strArr.length;i++){
   
this.strArr[i]=this.strArr[i].charAt(0).toUpperCase() + this.strArr[i].slice(1);
}

return this.strArr.join(" ");

}



} 