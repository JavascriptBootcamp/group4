import { Component } from '@angular/core';
import { QuizService } from './services/quiz.service';
import { Question } from './models/Question.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'quiz';
  questions: Question[];
  answers:string[];
  hidden: boolean;
  grade:number=0;
  submit: boolean;

  constructor(public quizService: QuizService) {
    this.questions = quizService.getAllQuestion();
    this.submit = false;
  }

  onSubmit(event:any, form: NgForm):void {
    this.submit = true;
    event.preventDefault();
    this.hidden = true;
    this.grade =this.quizService.grade(form.value);
    this.answers=this.quizService.getAllAnswers();
  }

}
