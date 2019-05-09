import { Injectable } from '@angular/core';
import { Question } from '../question.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  questions: Question[];
  constructor() {
    this.questions = [{ question: "Who painted the Mona Lisa?", answer1: "Leonardo Da Vinci", answer2: "Vincent Van Gogh", answer3: "Ms.Jeffries", answer4: "Mr.Posada", correctAnswer: "Leonardo Da Vinci" },
    { question: "What is the appropriate art term for color?", answer1: "Color", answer2: "Paint", answer3: "Hue", answer4: "Saturation", correctAnswer: "Color" },
    { question: "What do you call a point with no ending?", answer1: "Square", answer2: "Infinity", answer3: "Line", answer4: "Triangle", correctAnswer: "Line" },
    { question: "Which is a primary color?", answer1: "Black", answer2: "Red", answer3: "Grey", answer4: "White", correctAnswer: "Red" },
    { question: "What shape do we call a basketball ball?", answer1: "Square", answer2: "Circle", answer3: "Sphere", answer4: "Oval", correctAnswer: "Sphere" },
    { question: "Who painted the Mona Lisa?", answer1: "Leonardo Da Vinci", answer2: "Vincent Van Gogh", answer3: "Ms.Jeffries", answer4: "Mr.Posada", correctAnswer: "Leonardo Da Vinci" },
    { question: "What is the appropriate art term for color?", answer1: "Color", answer2: "Paint", answer3: "Hue", answer4: "Saturation", correctAnswer: "Color" },
    { question: "What do you call a point with no ending?", answer1: "Square", answer2: "Infinity", answer3: "Line", answer4: "Triangle", correctAnswer: "Line" },
    { question: "Which is a primary color?", answer1: "Black", answer2: "Red", answer3: "Grey", answer4: "White", correctAnswer: "Red" },
    { question: "What shape do we call a basketball ball?", answer1: "Square", answer2: "Circle", answer3: "Sphere", answer4: "Oval", correctAnswer: "Sphere" }];
  }

  get _allQuestionsAndAnswers(): Question[] {
    return this.questions;
  }

  isCorrectAnswer(answers: any, question: Question, index: number): boolean {
    if (question.correctAnswer === answers[index]) {
      return true
    } else {
      return false;
    }
  }

  amountOfCorrectQuestions(answers: any): number {

    let currectAnswers = 0;
    let index = 0;
    for (let key in answers) {
      if (this.questions[index].correctAnswer === answers[key].toString()) {
        currectAnswers++;
      }
      index++;
    }
    return currectAnswers;

  }
}
