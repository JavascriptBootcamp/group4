import { Component  , OnInit} from '@angular/core';
import {QuestionsService} from './questions.service';
import {answers} from './answers.model';
import {questions} from './questions.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  hidden : boolean;
  questions : questions[];
  constructor(private questionsService : QuestionsService){
    this.hidden = false;
    this.questions = [];
  }
  ngOnInit(){
    this.questions = this.questionsService._getAllQuestionsAndAnswers;
  }
  submitForm(e : Event){
    e.preventDefault();
    this.hidden = true;
  }
}
