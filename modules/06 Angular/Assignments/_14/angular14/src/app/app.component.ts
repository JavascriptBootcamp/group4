import { Component } from '@angular/core';
import {QuestionsService} from './questions.service';
import {questions} from './questions.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  hidden : boolean;
  questions : questions[];
  correctAnswers : number;
  indexQ : number;
  correctOrNot : boolean;
  constructor(private questionsService : QuestionsService){
    this.hidden = false;
    this.questions = [];
    this.correctAnswers = 0;
    this.indexQ = 0;
    this.correctOrNot = false;
  }
  ngOnInit(){
    this.questions = this.questionsService._getAllQuestionsAndAnswers;
  }
  submitForm(e : Event , value : any){
    e.preventDefault();
    this.hidden = true;
    this.correctAnswers = this.questionsService.numberOfCorrectAnswers(value);
    this.correctOrNot = this.questionsService.correctOrNot(this.questions[this.indexQ] , value , this.indexQ);
  }
}
