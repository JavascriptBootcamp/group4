import { Component, OnInit,ViewChild,AfterViewChecked } from '@angular/core';
import {Question} from '../question.module'
import {TriviaService} from '../trivia.service'
import { QuestionComponent } from '../question/question.component';
import {Router} from '@angular/router';
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit,AfterViewChecked {

  title:string = 'trivia';
  question:Question;
  interval:any;
  sec:number;

  @ViewChild(QuestionComponent)questionComponent:QuestionComponent;

  constructor(private triviaService:TriviaService,private router:Router){
   this.interval = null;
   this.sec = 10;
  }

  previousClicked(){
    
    if(this.question.question_id>0)
    this.question = this.triviaService.getNextQuestion(this.question.question_id,false);
    this.sec = 10;
    clearInterval(this.interval);
    this.setNewInterval();
  }

  nextClicked(){
    
    if(this.question.question_id<9)
    this.question = this.triviaService.getNextQuestion(this.question.question_id,true);
    this.sec = 10;
    clearInterval(this.interval);
    this.setNewInterval();
  }

  setNewInterval(){
    this.interval = setInterval(()=>{
      this.sec--;
    },1000)  
  }

  ngOnInit() {
    
    this.setNewInterval();
    this.question = this.triviaService.getNextQuestion(1,false);
   
   }


   ngAfterViewChecked(){
    
     if(this.questionComponent && this.questionComponent.clearIntervalFlag){
       clearInterval(this.interval);
     }
   }

   on_incrementToAnswersCounter(answersCounter:number){
      if(answersCounter === this.triviaService.getNumberOfQuestion){
        this.router.navigateByUrl('/result/'+ this.triviaService.getCorrectAnswers());
      }
   }

}
