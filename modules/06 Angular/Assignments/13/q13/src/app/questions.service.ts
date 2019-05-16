import { Injectable } from '@angular/core';
import { Question } from './question.model';
// import { Answer } from './answer.model';
import { NgForm } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class QuestionService {
questions: Question[];
answers: Object;
answersIndex: number[];
totalQuestions: number;
correctAnswers: number;
currentQuestionId: number;
answeredCounter: number;
  constructor() { 
    let i =0;
    this.questions = [
      { id: i++, question: "What's the name of England queen?", name:'queen' , option1: 'Elizebeth the 1st', option2: 'Elizebeth the 2st', option3: 'Elizebeth the 3st', option4: 'Elizebeth the 4st', value1: '1st', value2: '2nd', value3: '3rd', value4: '4th', correctAnswer: '1st', correctIndex: 0},
      { id: i++, question: "What's the surname of current U.S. president?", name: 'current', option1: 'Trump', option2: 'Tramp', option3: 'Trevor', option4: 'Obama', value1: 'trump', value2: 'tramp', value3: 'trevor', value4: 'obama', correctAnswer: 'obama', correctIndex: 3},
      { id: i++, question: "When was JFK murdered?", name: 'jfk', option1: '1971', option2: '1951', option3: '1963', option4: '1990', value1: '1971', value2: '1951', value3: '1963', value4: '1990', correctAnswer: '1971', correctIndex: 0},
      { id: i++, question: "Where was JFK murdered?", name: 'jfkPlace', option1: 'Dallas', option2: 'Houston', option3: 'New York', option4: 'Boston', value1: 'dallas', value2: 'houston', value3: 'newYork', value4: 'boston', correctAnswer: 'boston', correctIndex: 3},
      { id: i++, question: "What's the name of the 1st drummer of the Beatles?", name: 'drummer', option1: 'Ariel', option2: 'Jake', option3: 'Ringo', option4: 'Pete', value1: 'ariel', value2: 'jake', value3: 'ringo', value4: 'pete', correctAnswer: 'pete', correctIndex: 3},
      { id: i++, question: "What's the name of England queen before 500 years?", name: 'queen2', option1: 'Elizebeth the 1st', option2: 'Elizebeth the 2st', option3: 'Elizebeth the 3st', option4: 'Elizebeth the 4st', value1: '1st', value2: '2nd', value3: '3rd', value4: '4th', correctAnswer: '1st', correctIndex: 1},
      { id: i++, question: "What's the surname of last U.S. president before Trump?", name: 'last', option1: 'Trump', option2: 'Tramp', option3: 'Trevor', option4: 'Obama', value1: 'trump', value2: 'tramp', value3: 'trevor', value4: 'obama', correctAnswer: 'obama', correctIndex: 4},
      { id: i++, question: "When was JFK murdered?", name: 'jfk2',  option1: '1971', option2: '1951', option3: '1963', option4: '1990', value1: '1971', value2: '1951', value3: '1963', value4: '1990', correctAnswer: '1971', correctIndex: 1 },
      { id: i++, question: "Where was JFK murdered?", name: 'jfkPlace2',option1: 'Dallas', option2: 'Houston', option3: 'New York', option4: 'Boston', value1: 'dallas', value2: 'houston', value3: 'newYork', value4: 'boston', correctAnswer: 'boston', correctIndex: 3},
      { id: i++, question: "What's the name of the 2nd drummer of the Beatles?", name:'drummer2' , option1: 'Ariel', option2: 'Jake', option3: 'Ringo', option4: 'Pete', value1: 'ariel', value2: 'jake', value3: 'ringo', value4: 'pete', correctAnswer: 'pete', correctIndex: 3}
    ];

    this.answers = {queen:'', current:'', jfk:'', jfkPlace:'', drummer:'', queen2:'', last:'', jfk2:'', jfkPlace2:'', drummer2:''};
    this.answersIndex = [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1];
    this.totalQuestions = this.questions.length;
    this.correctAnswers = 0;
    this.currentQuestionId = 0;
    this.answeredCounter = 0;
  }

  getCurrentQuestionId(): number{
    return this.currentQuestionId;
  }

  getAnsweredCounter(): number{
    return this.answeredCounter;
  }

  setCurrentQuestionId(currentQuestionId: number){
    this.currentQuestionId = currentQuestionId;;
  }

  incAnsweredCounter(){
    this.answeredCounter++;
  }

  setCorrectAnswers(correctAnswers: number){
    this.correctAnswers = correctAnswers;
  }

  getQuestions(): Question[]{
    return this.questions
  }

  getAnswers(): Object{
    return this.answers;
  }

  getTotalQuestions(): number{
    return this.totalQuestions;
  }

  getCorrectAnswers(): number{
    return this.correctAnswers
  }

  incCorrectAnswers(){
    this.correctAnswers++;
  }

  isCorrectAnswer(name: string, answer: string): boolean{
    for(let i=0;i< this.getTotalQuestions();i++)
      if(this.questions[i].name === name)
        return this.questions[i].correctAnswer === answer;
    return false;
  }

  getCorrectAnswer(name: string): string{
    for(let i=0;i< this.getTotalQuestions();i++)
      if(this.questions[i].name === name)
        return this.questions[i].correctAnswer;
    return null;
  }

  getQuestionById(id: number){
    return this.questions[id];
  }

  // setAnswers(form: NgForm){
  //   for(let i: number=1; i <= this.questions.length; i++)
  //   {
  //     const q = form["q"+ i];
  //     const name = Object.keys(q)[0];
  //     const answer = q[name];
  //     this.answers[name] = answer;
  //     if(this.isCorrectAnswer(name,answer))
  //       {
  //         this.incCorrectAnswers();
  //       }
  //   }
  // }

    setAnswer(id: number, choosenIndex: number, answer: string){
      const question = this.getQuestionById(id);
      this.answers[question.name] = answer;
      this.answersIndex[id] = choosenIndex;
  }

  setAnswerIndex(answerIndex: number){
    this.answersIndex[this.currentQuestionId] = answerIndex;
  }

  getSelection(): number{
    return this.answersIndex[this.currentQuestionId];
  }

}
