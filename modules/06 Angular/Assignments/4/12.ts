import { Component , OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  strAns :string ="";

    ngOnInit(){
      this.evenWords("aaa bbb");

    }
 evenWords(str) {
   // var input= 'aaa bbbb  '
   // var strArr=input.split(' ');
   let strArr=str.split(' ');
    
    for(let i=1;i<=strArr.length;++i)
    {  

        if(i%2==0)
        {
            this.strAns+=strArr[i-1]+" ";
        }

    }
 
  }
 





}
