import { Component } from '@angular/core';
import { QuestionsService } from './questions.service';
import { questions } from './questions.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  id: number;
  hidden: boolean;
  hiddenBtn: boolean;
  questions: questions[];
  currentQuestion: questions;
  correctAnswers: number;
  indexQ: number;
  correct: boolean;
  constructor(private questionsService: QuestionsService) {
    this.id = 0;
    this.hidden = false;
    this.hiddenBtn = false;
    this.questions = [];
    this.correctAnswers = 0;
    this.indexQ = 0;
    this.correct = null;
  }
  ngOnInit() {
    this.id = 0;
    this.questions = this.questionsService._getAllQuestionsAndAnswers;
    this.currentQuestion = this.questionsService.getQuestionById(this.id);
  }
  nextQuestion(event: Event, value: any) {
    event.preventDefault();
    if (this.id === this.questions.length - 1) {
      this.hiddenBtn = true;
      return;
    }
    this.correct = this.questionsService.correctAnswer(value, this.id);
    if (this.correct) {
      this.questionsService.incCorrectAnswers();
    }
    this.id++;
    this.currentQuestion = this.questionsService.getQuestionById(this.id);
  }
  prevQuestion(event: Event, value: any) {
    event.preventDefault();
    if (this.id === 0) {
      return;
    }
    if (this.correct) {
      this.questionsService.decCorrectAnswers();
    }
    this.correct = this.questionsService.correctAnswer(value, this.id);
    this.hiddenBtn = false;
    this.id--;
    this.currentQuestion = this.questionsService.getQuestionById(this.id);
  }
  submitForm(e: Event) {
    e.preventDefault();
    this.hidden = true;
    this.correctAnswers = this.questionsService.numberOfCorrectAnswers();
  }
}
