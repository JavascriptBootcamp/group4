import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Question } from "../models/question.model";
import { questions } from "../models/questions";

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  questions: Question[];
  correctAnswers: number;

  constructor() {
    this.questions = questions;
    this.correctAnswers = 0;
  }

  countAnswers(form: NgForm) {
    const correct_ans = this.questions.filter((q,i) => this.isCorrectAnswer(form.value["q" + (i + 1)], this.questions[i]));
    this.correctAnswers = correct_ans.length;
  }

  isCorrectAnswer(user_answer: string, q: Question): boolean {
    let ans_key = q.ans;
    let answer = q[ans_key];
    let correct = (user_answer === answer)? true : false;
    return correct;
  }

  get_question(id: string): Question {
    let result = this.questions.filter(q=> q.id === id)[0];
    return result? result: null;
  }
}
