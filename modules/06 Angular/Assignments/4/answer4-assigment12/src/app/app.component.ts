import { Component,OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  strArr:string[];
  strAns:string;
  answer:string;
  constructor(str:string){

  }
  evenWords(str:string) {
    this.strArr=str.split(' ');
    this.strAns="";
    for(let i=1;i<=this.strArr.length;++i)
    {  
        if(i%2==0)
            this.strAns+=this.strArr[i-1]+" ";
    }
    return this.strAns;
  }
  ngOnInit(){
    this.answer="something";//this.evenWords("aaa bbbb asda 1331 ewe");
  }
}
