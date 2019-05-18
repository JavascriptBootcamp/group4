import { Injectable } from '@angular/core';
import { Question } from "../models/question.model";
import { NgForm, NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { Timer } from '../models/timer.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  questions: Question[];
  correctAnswers: number;
  timer: Timer;
  form: NgForm;
  submit: boolean;
  currentIndex: number;
  tmpIndex: number;
  toDisabled: boolean;
  prev: boolean;

  constructor(private router: Router) {
    this.questions = [
      { question: "1 + 1 ?", option1: "02", option2: "03", option3: "04", option4: "05", answer: "02" },
      { question: "2 + 2 ?", option1: "04", option2: "06", option3: "08", option4: "10", answer: "04" },
      { question: "3 + 3 ?", option1: "06", option2: "09", option3: "12", option4: "15", answer: "06" },
      { question: "4 + 4 ?", option1: "08", option2: "12", option3: "16", option4: "20", answer: "08" },
      { question: "5 + 5 ?", option1: "10", option2: "15", option3: "20", option4: "25", answer: "10" },
      { question: "6 + 6 ?", option1: "12", option2: "18", option3: "24", option4: "30", answer: "12" },
      { question: "7 + 7 ?", option1: "14", option2: "21", option3: "28", option4: "35", answer: "14" },
      { question: "8 + 8 ?", option1: "16", option2: "24", option3: "32", option4: "40", answer: "16" },
      { question: "9 + 9 ?", option1: "18", option2: "27", option3: "36", option4: "45", answer: "18" },
      { question: "10 + 10 ?", option1: "20", option2: "30", option3: "40", option4: "50", answer: "20" }
    ];
    this.initGame();
  }
  initGame() {
    this.correctAnswers = 0;
    this.initTimer();
    this.form = null;
    this.submit = false;
    this.currentIndex = 1;
    this.tmpIndex = 0;
    this.toDisabled = null;
    this.prev = false;
  }
  initTimer(): void {
    this.timer = { interval: 0, min: 0, sec: 20, time: '00:20' };
  }

  checkAnswers() {
    for (let i = 0; i < this.questions.length; i++) {
      if (this.questions[i].answer === this.form.value["q" + (i + 1)])
        this.correctAnswers++;
    }
  }
  isCorrectAnswer(answerElem: NgModel, ques: Question): boolean {
    return ques.answer === answerElem.value;
  }
  nextQuestion(): void {
    if (this.currentIndex < 10) {
      this.currentIndex++;
      if (!this.submit) {
        if (this.tmpIndex === this.currentIndex) {
          this.toDisabled = true;
          this.prev = false;
        }
        else if (!this.prev) {
          this.tmpIndex = this.currentIndex;
          this.stop();
          this.startCountDown();
        }
      }
    }
    else if (!this.submit) {
      this.onSubmit();
    }
    this.navigateQues(this.currentIndex);
  }
  prevQuestion(): void {
    this.disabledRadio();
    this.currentIndex--;
    this.navigateQues(this.currentIndex);
  }
  navigateQues(index: number): void {
    this.router.navigate([`../question/${index}`]);
  }
  startCountDown(): void {
    this.timer.interval = window.setInterval(() => {
      if ((this.timer.min <= 0) && (this.timer.sec <= 0)) {
        this.stop();
      }
      else {
        if (this.timer.sec <= 0) {
          this.timer.sec = 60;
          this.timer.min--;
        }
        this.timer.sec--;
        this.timer.time = this.timer.min < 10 ? "0" + this.timer.min : this.timer.min + "";
        this.timer.time = this.timer.time + ":" + (this.timer.sec < 10 ? "0" + this.timer.sec : this.timer.sec + "");
      }
    }, 1000);
  }
  stop(): void {
    window.clearInterval(this.timer.interval);
    this.initTimer();
  }

  onSubmit(): void {
    this.stop();
    this.disabledRadio();
    this.checkAnswers();
    this.submit = true;
  }
  disabledRadio(): void {
    this.toDisabled = true;
    this.prev = true;
  }
}
