import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../questions.service';

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.css']
})
export class AnswersComponent implements OnInit {

  numQuestions: number;
  correctAnswers: number;
  constructor(private questionsService : QuestionsService) { }

  ngOnInit() {

    this.numQuestions = this.questionsService.getQuestions().length;
    this.correctAnswers = this.questionsService.correctAnswers;

  }

}
