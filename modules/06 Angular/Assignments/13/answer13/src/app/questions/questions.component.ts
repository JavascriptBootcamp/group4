import { Component, OnInit } from '@angular/core';
import { Question } from '../question.model';
import { QuestionsService } from '../services/questions.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  questions: Question[];
  index: number;
  isCorrect: boolean;
  correctAnswers: number;
  display: boolean;
  constructor(private questionsService: QuestionsService) {
    this.questions = this.questionsService._allQuestionsAndAnswers;
    this.index = 0;
    this.isCorrect = false;
    this.correctAnswers = 0;
    this.display = false;
  }

  onSubmitForm(event: Event, answers: any) {
    event.preventDefault();
    this.display = true;
    this.isCorrect = this.questionsService.isCorrectAnswer(answers, this.questions[this.index], this.index);
    this.correctAnswers = this.questionsService.amountOfCorrectQuestions(answers);
  }

  ngOnInit() {
  }

}
