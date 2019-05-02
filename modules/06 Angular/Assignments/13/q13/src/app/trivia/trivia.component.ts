import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../questions.service';
import { Question } from '../question.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-trivia',
  templateUrl: './trivia.component.html',
  styleUrls: ['./trivia.component.css']
})
export class TriviaComponent implements OnInit {
  questions: Question[];
  constructor(private questionService: QuestionService) { 
    this.questions = [];

  }

  ngOnInit() {
    this.questions = this.questionService.getQuestions();
  }

  onSubmit(event, form: NgForm){
    event.preventDefault();
      this.questionService.setCorrectAnswers(0);
      this.questionService.setAnswers(form);
  }


}
