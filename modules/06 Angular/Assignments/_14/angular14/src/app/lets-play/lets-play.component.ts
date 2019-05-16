import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { QuestionsService } from '../questions.service';
import { questions } from '../questions.model';



@Component({
  selector: 'app-lets-play',
  templateUrl: './lets-play.component.html',
  styleUrls: ['./lets-play.component.css']
})
export class LetsPlayComponent implements OnInit {
  @ViewChild('r1') r1: ElementRef;
  @ViewChild('r2') r2: ElementRef;
  @ViewChild('r3') r3: ElementRef;
  @ViewChild('r4') r4: ElementRef;
  @ViewChild('myForm') myForm;
  id: number;
  hidden: boolean;
  hiddenBtn: boolean;
  questions: questions[];
  currentQuestion: questions;
  correctAnswers: number;
  indexQ: number;
  correct: boolean;
  time: number;
  interval: any;
  constructor(private questionsService: QuestionsService) {
    this.id = 0;
    this.hidden = false;
    this.hiddenBtn = false;
    this.questions = [];
    this.correctAnswers = 0;
    this.indexQ = 0;
    this.correct = null;
    this.time = 0;
    this.interval = null;
  }
  ngOnInit() {
    this.id = 0;
    this.questions = this.questionsService._getAllQuestionsAndAnswers;
    this.currentQuestion = this.questionsService.getQuestionById(this.id);
    this.incTime();
  }
  incTime() {
    this.interval = setInterval(() => {
      this.time++;
      if (this.time === 5) {
        this.nextQuestion(null, { q: this.myForm.value.q });
      }
    }, 1000);
  }
  clearTime() {
    this.time = 0;
    clearInterval(this.interval);
  }
  clearRadioBtn() {
    this.r1.nativeElement.checked = false;
    this.r2.nativeElement.checked = false;
    this.r3.nativeElement.checked = false;
    this.r4.nativeElement.checked = false;
  }
  nextQuestion(event: Event, value: any) {
    this.clearRadioBtn();
    if (event) {
      event.preventDefault();
    }
    this.clearTime();
    this.incTime();
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
    this.myForm.form.value.q = "";
  }
  prevQuestion(event: Event, value: any) {
    event.preventDefault();
    this.clearTime();
    this.incTime();
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
