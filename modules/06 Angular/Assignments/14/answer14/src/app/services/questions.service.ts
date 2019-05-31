import { Injectable } from '@angular/core';
import { Question } from '../question.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  questions: Question[];
  currectAnswers: number;
  constructor() {
    this.currectAnswers = 0;
    this.questions = [{ id: 1, question: "Who painted the Mona Lisa?", answer1: "Leonardo Da Vinci", answer2: "Vincent Van Gogh", answer3: "Ms.Jeffries", answer4: "Mr.Posada", correctAnswer: "Leonardo Da Vinci" },
    { id: 2, question: "What is the appropriate art term for color?", answer1: "Color", answer2: "Paint", answer3: "Hue", answer4: "Saturation", correctAnswer: "Color" },
    { id: 3, question: "What do you call a point with no ending?", answer1: "Square", answer2: "Infinity", answer3: "Line", answer4: "Triangle", correctAnswer: "Line" },
    { id: 4, question: "Which is a primary color?", answer1: "Black", answer2: "Red", answer3: "Grey", answer4: "White", correctAnswer: "Red" },
    { id: 5, question: "What shape do we call a basketball ball?", answer1: "Square", answer2: "Circle", answer3: "Sphere", answer4: "Oval", correctAnswer: "Sphere" },
    { id: 6, question: "Who painted the Mona Lisa?", answer1: "Leonardo Da Vinci", answer2: "Vincent Van Gogh", answer3: "Ms.Jeffries", answer4: "Mr.Posada", correctAnswer: "Leonardo Da Vinci" },
    { id: 7, question: "What is the appropriate art term for color?", answer1: "Color", answer2: "Paint", answer3: "Hue", answer4: "Saturation", correctAnswer: "Color" },
    { id: 8, question: "What do you call a point with no ending?", answer1: "Square", answer2: "Infinity", answer3: "Line", answer4: "Triangle", correctAnswer: "Line" },
    { id: 9, question: "Which is a primary color?", answer1: "Black", answer2: "Red", answer3: "Grey", answer4: "White", correctAnswer: "Red" },
    { id: 10, question: "What shape do we call a basketball ball?", answer1: "Square", answer2: "Circle", answer3: "Sphere", answer4: "Oval", correctAnswer: "Sphere" }];
  }

  get _allQuestionsAndAnswers(): Question[] {
    return this.questions;
  }

  getCurrentQuestion(id: number) {
    for (let i = 0; i < this.questions.length; i++) {
      if (this.questions[i].id === id) {
        return this.questions[i];
      }
    }
  }

  isCorrectAnswer(answer: any, questions: Question[], id: number): boolean {
    if (questions[id - 1].correctAnswer === answer) {
      return true
    } else {
      return false;
    }
  }

  amountOfCorrectQuestions(isCorrect: boolean, id: number): number {
    if (isCorrect) {
      this.currectAnswers++;
    }
    if (id === 11) {
      this.currectAnswers = 0;
    }
    return this.currectAnswers;
  }
}
