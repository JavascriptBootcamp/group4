import { Component ,OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  //title = 'answer04-assinment12';
  str:string;
  strArr:string[];
  strAns:string;
  ans:string;
  constructor(){
    this.str="";
  }
  ngOnInit(){
    //this.ans="sdas"
    this.ans =this.evenWords('aaa bbbb  ')
  }
  evenWords(str:string):string {
    // var input= 'aaa bbbb  '
    // var strArr=input.split(' ');
     this.strArr=str.split(' ');
     this.strAns="";
     for(let i=1;i<=this.strArr.length;++i)
     {  
 
         if(i%2==0)
         {
             this.strAns+=this.strArr[i-1]+" ";
         }
 
     }
     //console.log(strAns);
    return this.strAns;
   }
}
