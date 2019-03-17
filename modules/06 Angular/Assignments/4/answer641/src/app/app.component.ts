import { Component ,OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{ 
  title = 'answer641';


  strAns="";
  ngOnInit()
  {

    this.evenWords('aaa bbbb  ');
  }
  
   evenWords(str) {
    let strArr=str.split(' ');
     for(let i=1;i<=strArr.length;++i)
     {  
 
         if(i%2==0)
         {
             this.strAns+=strArr[i-1]+" ";
         }
 
     }
    console.log( this.strAns)
   }
}
