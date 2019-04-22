import {Pipe,PipeTransform} from '@angular/core';
@Pipe({
    name:'capitalize'
})
export class CapitalizePipe implements PipeTransform{
    transform(input:string):string {
        let arr=input.split(' ');
        
        // arr.forEach(element => {
        //     element.charAt(0).toUpperCase()+element.substring(1);
        // });

        for (let i = 0; i < arr.length; i++) {
           
            arr[i][0].charAt(0).toUpperCase()+arr[i].substring(1);
            arr[i]=arr[i][0].charAt(0).toUpperCase()+arr[i].substring(1);
        }
        // console.log(arr);
        
        return arr.join(' ');
    }

}