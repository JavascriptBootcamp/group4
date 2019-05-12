import { Injectable } from '@angular/core';
import { Question } from './question.module'
@Injectable({
  providedIn: 'root'
})
export class QuizService {
  questions: Question[];
  constructor() {
    this.questions = [
      {
        question_id: 1,
        question: "1.witch kind of sport,there is no ball ?",
        ans: [
          {answer_number:"1", content: "football",clicked:false},
          {answer_number:"2", content: "swim",clicked:false},
          {answer_number:"3", content: "basketball",clicked:false},
          {answer_number:"4", content: "soccer",clicked:false},
        ],
        correctAnswer:"2",
        clicked:false,
        isCorrect:null
      },

      {
        question_id: 2,
        question: "2.When was the recognition of the State of Israel ?",
        ans: [
          {answer_number:"1", content: "1948" ,clicked:false},
          {answer_number:"2", content: "2000",clicked:false },
          {answer_number:"3", content: "1950",clicked:false },
          {answer_number:"4", content: "1967",clicked:false },
        ],
        correctAnswer:"1",
        clicked:false,
        isCorrect:null
      },

      {
        question_id: 3,
        question: "3.Who was Israel's first prime minister ?",
        ans: [
          {answer_number:"1", content: "David Ben Gorion",clicked:false},
          {answer_number:"2", content: "Bibi",clicked:false },
          {answer_number:"3", content: "Rabin",clicked:false },
          {answer_number:"4", content: "Begin",clicked:false},
        ],
        correctAnswer:"1",
        clicked:false,
        isCorrect:null
      },

      {
        question_id: 4,
        question: "4.What is the capital of Israel ?",
        ans: [
          {answer_number:"1", content: "New York" ,clicked:false},
          {answer_number:"2", content: "Netanya",clicked:false },
          {answer_number:"3", content: "Jerusalem" ,clicked:false},
          {answer_number:"4", content: "Tel Aviv",clicked:false }
        ],
        correctAnswer:"3",
        clicked:false,
        isCorrect:null
      },

      {
        question_id: 5,
        question: "5.What is the capital of Spain ?",
        ans: [
          {answer_number:"1", content: "Barcelona",clicked:false },
          {answer_number:"2", content: "Madrid",clicked:false},
          {answer_number:"3", content: "Tel Aviv",clicked:false},
          {answer_number:"4", content: "New York",clicked:false}
        ],
        correctAnswer:"2",
        clicked:false,
        isCorrect:null
      },

      {
        question_id: 6,
        question: "5.What is the capital of France ?",
        ans: [
          {answer_number:"1", content: "Pariz",clicked:false },
          {answer_number:"2", content: "Madrid", clicked:false},
          {answer_number:"3", content: "Tel Aviv",clicked:false},
          {answer_number:"4", content: "New York",clicked:false}
        ],
        correctAnswer:"1",
        clicked:false,
        isCorrect:null
      },

      {
        question_id: 7,
        question: "7.What animal is under water ?",
        ans: [
          {answer_number:"1", content: "Lion",clicked:false },
          {answer_number:"2", content: "Fish",clicked:false},
          {answer_number:"3", content: "Cat" ,clicked:false},
          {answer_number:"4", content: "Dog",clicked:false}
        ],
        correctAnswer:"2",
        clicked:false,
        isCorrect:null
      },

      {
        question_id: 8,
        question: "8.Who is the best friend of man ?",
        ans: [
          {answer_number:"1", content: "Lion" ,clicked:false},
          {answer_number:"2", content: "Fish",clicked:false},
          {answer_number:"3", content: "Cat",clicked:false },
          {answer_number:"4", content: "Dog",clicked:false},
        ],
        correctAnswer:"4",
        clicked:false,
        isCorrect:null
      },

      {
        question_id: 9,
        question: "9.What is unusual ?",
        ans: [
          {answer_number:"1", content: "Lion",clicked:false },
          {answer_number:"2", content: "Fish",clicked:false},
          {answer_number:"3", content: "Cat",clicked:false},
          {answer_number:"4", content: "Dog",clicked:false},
        ],
        correctAnswer:"2",
        clicked:false,
        isCorrect:null
      },

      {
        question_id: 10,
        question: "10.What is the capital of Egypt ?",
        ans: [
          {answer_number:"1", content: "Cairo",clicked:false},
          {answer_number:"2", content: "Madrid",clicked:false},
          {answer_number:"3", content: "Tel Aviv",clicked:false },
          {answer_number:"4", content: "New York" ,clicked:false},
        ],
        correctAnswer:"1",
        clicked:false,
        isCorrect:null
      }
    ]
  }


  get getQuestions(): Question[] {
    return this.questions;
  }

  isCorrect(q_index: string, answer_number: string): boolean {
    const correct_ans = this.questions[q_index].correctAnswer;
    this.questions[q_index].isCorrect = answer_number === correct_ans;
    return answer_number === correct_ans;
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

}
