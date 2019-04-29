import { Injectable } from '@angular/core';
import { questions } from './questions.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  question: questions[];
  constructor() {
    this.question = [
      { question: "What sweet food made by bees using nectar from flowers?", answers: { q1: "Honey", q2: "chocolate", q3: "milk", q4: "butter" }, correctAnswer: "Honey" },
      { question: "Which country is home to the kangaroo?", answers: { q1: "israel", q2: "denemark", q3: "australia", q4: "germany" }, correctAnswer: "Honey" },
      { question: "What is the top colour in a rainbow?", answers: { q1: "blue", q2: "red", q3: "purple", q4: "green" }, correctAnswer: "Honey" },
      { question: "How many colours are in a rainbow?", answers: { q1: "7", q2: "3", q3: "10", q4: "5" }, correctAnswer: "Honey" },
      { question: "How many years are there in a millennium", answers: { q1: "1000", q2: "10000", q3: "10", q4: "1" }, correctAnswer: "Honey" },
      { question: "What colour are Smurfs?", answers: { q1: "red", q2: "green", q3: "brown", q4: "blue" }, correctAnswer: "Honey" },
      { question: "Name Batman’s crime fighting partner?", answers: { q1: "robin", q2: "chrise", q3: "daniel", q4: "tami" }, correctAnswer: "Honey" },
      { question: "how many sides does a triangle have?", answers: { q1: "5", q2: "2", q3: "1", q4: "3" }, correctAnswer: "Honey" },
      { question: "How many days are there in a fortnight?", answers: { q1: "15", q2: "14", q3: "1", q4: "9" }, correctAnswer: "Honey" },
      { question: "Who does (the animated character) Princess Fiona marry?", answers: { q1: "robin hood", q2: "shrek", q3: "bugs bunny", q4: "donald duck" }, correctAnswer: "Honey" }
    ];
  }

  get _getAllQuestionsAndAnswers(): questions[] {
    return this.question;
  }

}
