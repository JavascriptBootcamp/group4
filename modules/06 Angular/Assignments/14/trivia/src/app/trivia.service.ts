import { Question } from './question.module'
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TriviaService {
  questions: Question[];
  constructor() {
    this.questions = [
      {
        question_id: 0,
        question: "1.witch kind of sport,there is no ball ?",
        ans: [
          { isCorrect: false, content: "football", clicked: false },
          { isCorrect: true, content: "swim", clicked: false },
          { isCorrect: false, content: "basketball", clicked: false },
          { isCorrect: false, content: "soccer", clicked: false }
        ],
        answerIndex:null,
        clicked: false,
        isCorrect: null
      },

      {
        question_id: 1,
        question: "2.When was the recognition of the State of Israel ?",
        ans: [
          { isCorrect: true, content: "1948", clicked: false },
          { isCorrect: false, content: "2000", clicked: false },
          { isCorrect: false, content: "1950", clicked: false },
          { isCorrect: false, content: "1967", clicked: false }
        ],
        answerIndex:null,
        clicked: false,
        isCorrect: null
      },

      {
        question_id: 2,
        question: "3.Who was Israel's first prime minister ?",
        ans: [
          { isCorrect: true, content: "David Ben Gorion", clicked: false },
          { isCorrect: false, content: "Bibi", clicked: false },
          { isCorrect: false, content: "Rabin", clicked: false },
          { isCorrect: false, content: "Begin", clicked: false }
        ],
        answerIndex:null,
        clicked: false,
        isCorrect: null
      },

      {
        question_id: 3,
        question: "4.What is the capital of Israel ?",
        ans: [
          { isCorrect: false, content: "New York", clicked: false },
          { isCorrect: false, content: "Netanya", clicked: false },
          { isCorrect: true, content: "Jerusalem", clicked: false },
          { isCorrect: false, content: "Tel Aviv", clicked: false }
        ],
        answerIndex:null,
        clicked: false,
        isCorrect: null
      },

      {
        question_id: 4,
        question: "5.What is the capital of Spain ?",
        ans: [
          { isCorrect: false, content: "Barcelona", clicked: false },
          { isCorrect: true, content: "Madrid", clicked: false },
          { isCorrect: false, content: "Tel Aviv", clicked: false },
          { isCorrect: false, content: "New York", clicked: false }
        ],
        answerIndex:null,
        clicked: false,
        isCorrect: null
      },

      {
        question_id: 5,
        question: "5.What is the capital of France ?",
        ans: [
          { isCorrect: true, content: "Pariz", clicked: false },
          { isCorrect: false, content: "Madrid", clicked: false },
          { isCorrect: false, content: "Tel Aviv", clicked: false },
          { isCorrect: false, content: "New York", clicked: false }
        ],
        answerIndex:null,
        clicked: false,
        isCorrect: null
      },

      {
        question_id: 6,
        question: "7.What animal is under water ?",
        ans: [
          { isCorrect: false, content: "Lion", clicked: false },
          { isCorrect: true, content: "Fish", clicked: false },
          { isCorrect: false, content: "Cat", clicked: false },
          { isCorrect: false, content: "Dog", clicked: false }
        ],
        answerIndex:null,
        clicked: false,
        isCorrect: null
      },

      {
        question_id: 7,
        question: "8.Who is the best friend of man ?",
        ans: [
          { isCorrect: false, content: "Lion", clicked: false },
          { isCorrect: false, content: "Fish", clicked: false },
          { isCorrect: false, content: "Cat", clicked: false },
          { isCorrect: true, content: "Dog", clicked: false }
        ],
        answerIndex:null,
        clicked: false,
        isCorrect: null
      },

      {
        question_id: 8,
        question: "9.What is unusual ?",
        ans: [
          { isCorrect: false, content: "Lion", clicked: false },
          { isCorrect: true, content: "Fish", clicked: false },
          { isCorrect: false, content: "Cat", clicked: false },
          { isCorrect: false, content: "Dog", clicked: false }
        ],
        answerIndex:null,
        clicked: false,
        isCorrect: null
      },

      {
        question_id: 9,
        question: "10.What is the capital of Egypt ?",
        ans: [
          { isCorrect: true, content: "Cairo", clicked: false },
          { isCorrect: false, content: "Madrid", clicked: false },
          { isCorrect: false, content: "Tel Aviv", clicked: false },
          { isCorrect: false, content: "New York", clicked: false }
        ],
        answerIndex:null,
        clicked: false,
        isCorrect: null
      }
    ]
  }


  getNextQuestion(q_index: number, navigateFlag: boolean): Question {
    if (navigateFlag)
      return this.questions[++q_index];
    else
      return this.questions[--q_index];
  }

  isCorrect(q_index: number, a_index: string): boolean {

    this.questions[q_index].isCorrect = this.questions[q_index].ans[a_index].isCorrect;
    return this.questions[q_index].ans[a_index].isCorrect;
  }

  getCorrectAnswers(): number {
    let countOfCorrectAnswers = 0;
    for (let i = 0; i < this.questions.length; i++) {
      if (this.questions[i].isCorrect) {
        countOfCorrectAnswers++;
      }
    }
    return countOfCorrectAnswers;
  }

  
  get getNumberOfQuestion(){
    return this.questions.length;
  }


  clearData():void{
    for (let i = 0; i < this.questions.length; i++) {
      this.questions[i].isCorrect = null;
      this.questions[i].answerIndex = null;
      this.questions[i].clicked = false;
      for (let j = 0; j < this.questions[i].ans.length; j++) {
        this.questions[i].ans[j].clicked = false;
      }
      }
    }
  

}
