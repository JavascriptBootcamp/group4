import { Component,OnInit,OnChanges,SimpleChanges,ViewChild,AfterViewChecked} from '@angular/core';
import {Question} from './question.module'
import {TriviaService} from './trivia.service'
import { QuestionComponent } from './question/question.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title:string = 'trivia';




  constructor(private triviaService:TriviaService){

  }
 

  ngOnInit() {
    
   
   }


 

}
