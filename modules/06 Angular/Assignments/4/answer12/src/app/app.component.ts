import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title : string = 'answer12';
  inputText:string = 'aaa bbbb  ';

  constructor(){
  
  }
  evenWords() {
    // var input= 'aaa bbbb  '
    // var strArr=input.split(' ');
    let strArr=this.inputText.split(' ');
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
