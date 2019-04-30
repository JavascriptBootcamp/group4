import { Component } from '@angular/core';
import { QuestionsAndAnswersService } from '../questions-and-answers.service';

@Component({
  selector: 'app-display-quiz-results',
  templateUrl: './display-quiz-results.component.html',
  styleUrls: ['./display-quiz-results.component.css']
})
export class DisplayQuizResultsComponent  {

  correctAnswersCount: number;

  constructor(private questionsAndAnswersServiceObj: QuestionsAndAnswersService) { 
    this.correctAnswersCount = this.questionsAndAnswersServiceObj.getCorrectAnswersNum();
  }
}