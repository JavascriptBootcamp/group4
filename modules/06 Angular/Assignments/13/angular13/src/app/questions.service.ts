import { Injectable } from '@angular/core';
import { Question } from './Question.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  questions: Question[];
  constructor() {
    this.questions = [
      { question: "What's the name of the 1st drummer of the Beatles? ", name: "What's the name of the 1st drummer of the Beatles? ", answer1: { answer: "Ariel", isTrue: false }, answer2: { answer: "Jake", isTrue: false }, answer3: { answer: "Ringo", isTrue: false }, answer4: { answer: "Pete", isTrue: true }, value1: "Ariel", value2: "Jake", value3: "Ringo", value4: "Pete" },
      { question: "What's the name of England queen before 500 years? ", name: "What's the name of England queen before 500 years? ", answer1: { answer: "Elizebeth the 1st", isTrue: false }, answer2: { answer: "Elizebeth the 2nd", isTrue: true }, answer3: { answer: "Elizebeth the 3rd", isTrue: false }, answer4: { answer: "Elizebeth the 4th", isTrue: false }, value1: "Elizebeth the 1st", value2: "Elizebeth the 2nd", value3: "Elizebeth the 3rd", value4: "Elizebeth the 4th" },
      { question: "What's the surname of last U.S. president before Trump?", name: "What's the surname of last U.S. president before Trump?", answer1: { answer: "Trump", isTrue: false }, answer2: { answer: "Tramp", isTrue: false }, answer3: { answer: "Trevor", isTrue: false }, answer4: { answer: "Obama", isTrue: true }, value1: "Trump", value2: "Tramp", value3: "Trevor", value4: "Obama" },
      { question: "When was JFK murdered?", name: "When was JFK murdered?", answer1: { answer: "1971", isTrue: false }, answer2: { answer: "1951", isTrue: false }, answer3: { answer: "1963", isTrue: true }, answer4: { answer: "1990", isTrue: false }, value1: "1971", value2: "1951", value3: "1963", value4: "1990" },
      { question: "Where was JFK murdered?", name: "Where was JFK murdered?", answer1: { answer: "Dallas", isTrue: true }, answer2: { answer: "Houston", isTrue: false }, answer3: { answer: "New York", isTrue: false }, answer4: { answer: "Boston", isTrue: false }, value1: "Dallas", value2: "Houston", value3: "New York", value4: "Boston" },
      { question: "What's the name of England queen before 500 years? ", name: "What's the name of England queen before 500 years? ", answer1: { answer: "Elizebeth the 1st", isTrue: false }, answer2: { answer: "Elizebeth the 2nd", isTrue: true }, answer3: { answer: "Elizebeth the 3rd", isTrue: false }, answer4: { answer: "Elizebeth the 4th", isTrue: false }, value1: "Elizebeth the 1st", value2: "Elizebeth the 2nd", value3: "Elizebeth the 3rd", value4: "Elizebeth the 4th" },
      { question: "What's the name of the 2nd drummer of the Beatles? ", name: "What's the name of the 2nd drummer of the Beatles? ", answer1: { answer: "Ariel", isTrue: false }, answer2: { answer: "Jake", isTrue: false }, answer3: { answer: "Ringo", isTrue: true }, answer4: { answer: "Pete", isTrue: false }, value1: "Ariel", value2: "Jake", value3: "Ringo", value4: "Pete" },
      { question: "What's the surname of last U.S. president before Trump?", name: "What's the surname of last U.S. president before Trump?", answer1: { answer: "Trump", isTrue: false }, answer2: { answer: "Tramp", isTrue: false }, answer3: { answer: "Trevor", isTrue: false }, answer4: { answer: "Obama", isTrue: true }, value1: "Trump", value2: "Tramp", value3: "Trevor", value4: "Obama" },
      { question: "When was JFK murdered?", answer1: { answer: "1971", isTrue: false }, name: "When was JFK murdered?", answer2: { answer: "1951", isTrue: false }, answer3: { answer: "1963", isTrue: true }, answer4: { answer: "1990", isTrue: false }, value1: "1971", value2: "1951", value3: "1963", value4: "1990" },
      { question: "Where was JFK murdered?", answer1: { answer: "Dallas", isTrue: true }, name: "Where was JFK murdered?", answer2: { answer: "Houston", isTrue: false }, answer3: { answer: "New York", isTrue: false }, answer4: { answer: "Boston", isTrue: false }, value1: "Dallas", value2: "Houston", value3: "New York", value4: "Boston" }

    ];
  }

  allUserAnswers(form) {
    let answers: string[]=[];
    for (let i=0; i <this.questions.length; i++) {
      let q = form["question" + i];
      let question = Object.keys(q)[0];
      let answer = q[question];
      answers[i]=answer;
    }
   return this.howManyAnswersCorrect(answers);

  }

  howManyAnswersCorrect(answers: string[]) {
    let counter = 0;
    for (let i = 0; i < answers.length; i++) {

      if(this.isCorrectAnswer(answers[i],this.questions[i]))
        counter++;
      
    }
    return counter;
  }
  isCorrectAnswer(answer:string,question:Question){
    return (answer === this.getCorrectAnswer(question)) 

  }

  getCorrectAnswer(question) {
   let q :Question = this.questions.filter( obj => obj.question === question.question)[0];
      if (q.answer1.isTrue)
      return q.answer1.answer;
    if (q.answer2.isTrue)
      return q.answer2.answer;
    if (q.answer3.isTrue)
      return q.answer3.answer;
    if (q.answer4.isTrue)
      return q.answer4.answer;
  }

  
  getQuestionsNAnswers() {
    return this.questions;
  }





}
