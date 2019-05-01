import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../questions.service';
import { Question } from '../question.model';

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

}
