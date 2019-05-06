import { Injectable } from '@angular/core';
import { Question } from '../models/Question.model';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  questions: Question[];
  answers:string[];

  constructor() {
    this.questions = [
      { question: "What's the name of England queen?", name: 'queen', option1: 'Elizebeth the 1st', option2: 'Elizebeth the 2st', option3: 'Elizebeth the 3st', option4: 'Elizebeth the 4st', value1: '1st', value2: '2nd', value3: '3rd', value4: '4th', correctAnswer: '1st' },
      { question: "What's the surname of current U.S. president?", name: 'current', option1: 'Trump', option2: 'Tramp', option3: 'Trevor', option4: 'Obama', value1: 'trump', value2: 'tramp', value3: 'trevor', value4: 'obama', correctAnswer: 'obama' },
      { question: "When was JFK murdered?", name: 'jfk', option1: '1971', option2: '1951', option3: '1963', option4: '1990', value1: '1971', value2: '1951', value3: '1963', value4: '1990', correctAnswer: '1971' },
      { question: "Where was JFK murdered?", name: 'jfkPlace', option1: 'Dallas', option2: 'Houston', option3: 'New York', option4: 'Boston', value1: 'dallas', value2: 'houston', value3: 'newYork', value4: 'boston', correctAnswer: 'boston' },
      { question: "What's the name of the 1st drummer of the Beatles?", name: 'drummer', option1: 'Ariel', option2: 'Jake', option3: 'Ringo', option4: 'Pete', value1: 'ariel', value2: 'jake', value3: 'ringo', value4: 'pete', correctAnswer: 'pete' },
      { question: "What's the name of England queen before 500 years?", name: 'queen2', option1: 'Elizebeth the 1st', option2: 'Elizebeth the 2st', option3: 'Elizebeth the 3st', option4: 'Elizebeth the 4st', value1: '1st', value2: '2nd', value3: '3rd', value4: '4th', correctAnswer: '1st' },
      { question: "What's the surname of last U.S. president before Trump?", name: 'last', option1: 'Trump', option2: 'Tramp', option3: 'Trevor', option4: 'Obama', value1: 'trump', value2: 'tramp', value3: 'trevor', value4: 'obama', correctAnswer: 'obama' },
      { question: "When was JFK murdered?", name: 'jfk2', option1: '1971', option2: '1951', option3: '1963', option4: '1990', value1: '1971', value2: '1951', value3: '1963', value4: '1990', correctAnswer: '1971' },
      { question: "Where was JFK murdered?", name: 'jfkPlace2', option1: 'Dallas', option2: 'Houston', option3: 'New York', option4: 'Boston', value1: 'dallas', value2: 'houston', value3: 'newYork', value4: 'boston', correctAnswer: 'boston' },
      { question: "What's the name of the 2nd drummer of the Beatles?", name: 'drummer2', option1: 'Ariel', option2: 'Jake', option3: 'Ringo', option4: 'Pete', value1: 'ariel', value2: 'jake', value3: 'ringo', value4: 'pete', correctAnswer: 'pete' }
    ];

    this.answers = ['1st','obama','1971','boston','pete','1st','obama','1971','boston','pete'];
  }

  getAllQuestion(): Question[] {
    return this.questions;
  }

  getAllAnswers(): string[] {
    return this.answers;
  }

  isCorrect(optElem:any, question:string): boolean {
    
    for (let i = 0; i < this.questions.length; i++) {
      if (question == this.questions[i].question) {
        console.log(question);
        console.log(this.questions[i].question);
        console.log(optElem.value+this.questions[i].correctAnswer);
        if (optElem.value === this.questions[i].correctAnswer) {
          console.log(optElem.value+this.questions[i].correctAnswer);
          return true;
        }
        else {
          break;
        }
      }
    }
    return false;
  }

  grade(value: object): number {
    let index:number=0;
    let correctAnswers:number=0;
    for (let answer in value){
      if (value[answer]==this.questions[index].correctAnswer){
        correctAnswers++;
      }
      index++;
    }
    
    return correctAnswers;
  }
}
