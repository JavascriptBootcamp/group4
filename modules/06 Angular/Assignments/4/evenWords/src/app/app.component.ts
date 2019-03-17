import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'evenWords';

  constructor(){

  }

   evenWords(str:string):string {
    const strArr = str.split(' ');
     let strAns="";
     for(let i=1;i<=strArr.length;++i)
     {  
         if(i%2==0)
         {
             strAns+=strArr[i-1]+" ";
         }
     }
    return strAns;
   }
}
