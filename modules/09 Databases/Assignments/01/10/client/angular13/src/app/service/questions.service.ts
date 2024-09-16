import { Injectable } from '@angular/core';
import { Question } from "../models/question.model";
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  questions: Question[];
  correctAnswers: number;
  topTen: boolean;
  maxScores: number;
  data;
  constructor() {
    this.data = null;
    this.maxScores = 10;
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
    this.correctAnswers = 0;
    this.topTen = false;
  }

  checkAnswers(form: NgForm) {
    for (let i = 0; i < this.questions.length; i++) {
      if (this.questions[i].answer === form.value["q" + (i + 1)])
        this.correctAnswers++;
    }
  }
  isCorrectAnswer(answerElem, quesName): boolean {
    for (let i = 0; i < this.questions.length; i++) {
      if (quesName === this.questions[i].question) {
        if (answerElem.value === this.questions[i].answer) {
          return true;
        }
        else {
          break;
        }
      }
    }
    return false;
  }
  async isTopTen() {
    this.data = await fetch('http://localhost:8000/highscore').then(res => res.json());
    if (this.data.length < this.maxScores) {
      return this.topTen = true;
    }
    else {
      this.data.some(element => {
        if (this.correctAnswers > element.score) {
          return this.topTen = true;
        }
      });
    }
    return this.topTen;
  }
}
