import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Question } from '../question.model';
import { QuestionsService } from '../services/questions.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  questions: Question[];
  currentQuestion: Question;
  isCorrect: boolean;
  correctAnswers: number;
  timer: any;
  id: number;
  interval: any;
  isDisplayResult: boolean;
  isDisplayForm: boolean;
  isDisplaySubmit: boolean;
  isDisplayNext: boolean;
  @ViewChild('form') form;
  @ViewChild('answer1') answer1: ElementRef;
  @ViewChild('answer2') answer2: ElementRef;
  @ViewChild('answer3') answer3: ElementRef;
  @ViewChild('answer4') answer4: ElementRef;

  constructor(private questionsService: QuestionsService) {
    this.isCorrect = false;
    this.correctAnswers = 0;
    this.timer = 10;
    this.id = 1;
    this.interval = null;
    this.isDisplayResult = false;
    this.isDisplayForm = true;
    this.isDisplaySubmit = false;
    this.isDisplayNext = true;
  }

  ngOnInit() {
    this.correctAnswers = 0;
    this.questions = this.questionsService._allQuestionsAndAnswers;
    this.currentQuestion = this.questionsService.getCurrentQuestion(this.id);
    this.onStartCountdown();
  }

  onStartCountdown() {
    this.interval = setInterval(() => {
      this.timer--;
      if (this.timer < 0) {
        this.onNextQuestion(null, this.form.value);
        this.form.value.quiz = "";
      }
    }, 1000);
  }

  onNextQuestion(event: Event, answer) {
    if (event) {
      event.preventDefault();
    }
    this.isCorrect = this.questionsService.isCorrectAnswer(answer.quiz, this.questions, this.id);
    if (this.isCorrect) {
      this.correctAnswers++;
    }
    //this.correctAnswers = this.questionsService.amountOfCorrectQuestions(this.isCorrect, this.id);
    answer.quiz = "";
    this.resetAnswersChecked();
    clearInterval(this.interval);
    if (this.id === 9) {
      this.isDisplayNext = false;
      this.isDisplaySubmit = true;
    }
    this.id++;
    if (this.id < 11) {
      this.currentQuestion = this.questionsService.getCurrentQuestion(this.id);
      this.timer = 10;
      this.onStartCountdown();
    }
    if (this.id === 11) {
      this.onSubmitForm(null);
    }
  }

  resetAnswersChecked() {
    this.answer1.nativeElement.checked = false;
    this.answer2.nativeElement.checked = false;
    this.answer3.nativeElement.checked = false;
    this.answer4.nativeElement.checked = false;
  }

  onSubmitForm(event: Event) {
    if (event) {
      event.preventDefault();
    }
    if (this.id === 10) {
      this.onNextQuestion(null, this.form.value);
    }
    this.isDisplayForm = false;
    this.isDisplayResult = true;
  }
}
