import { Component  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'switch';
  str = "abc def ghi jkl ";

 
   evenWords(str:string) {
   
    let strArr:string[]=str.split(' ');
    let strAns:string="";
     for(let i:number=1;i<=strArr.length;++i)
     {  
 
         if(i%2==0)
         {
             strAns+=strArr[i-1]+" ";
         }
 
     }
     
    return strAns;
   }
}
