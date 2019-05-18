import { Component } from '@angular/core';
import { QuestionsAndAnswersService } from '../questions-and-answers.service';
import { QuestionComponent } from '../question/question.component';

@Component({
  selector: 'app-display-quiz-results',
  templateUrl: './display-quiz-results.component.html',
  styleUrls: ['./display-quiz-results.component.css']
})
export class DisplayQuizResultsComponent  {

  correctAnswersCount: number;

  constructor(private questionsServiceObj: QuestionsAndAnswersService) {}
}
