import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  sentence:string;
  wordArray:string[];
  result:string[];
  answer:string;
  constructor(){
    this.sentence="aaa bbbb asda 1331 ewe";
    this.result=[];
  }
  evenWords() {
    this.wordArray=this.sentence.split(' ');
    for(let i=0;i<=this.wordArray.length-1;++i)
    {  
        if(this.wordArray[i].length%2===0)
          this.result.push(this.wordArray[i]);
    }
    return this.result.join(' ');
  }
  ngOnInit(){
    this.answer=this.evenWords();
  }
}
