import { Injectable } from '@angular/core';
import { Quiz } from '../models/quiz.model';

@Injectable({
  providedIn: 'root'
})
export class ManageQuizsService {
  quizes: Quiz[];
  currentQuiz: Quiz;
  maximumTime: number;
  interval: any;

  constructor() {
    this.maximumTime = 5;
    this.quizes = [];
    this.currentQuiz = null;
    this.addFakeQuiz();
   }

  addFakeQuiz(){
    this.quizes.push({
      time: this.maximumTime,
      quizIndex: 0,
      quizName: "Non Sense",
      started:false,
      submmited: false,
      currentQuestionIndex: 0,
      score: 0,
      questions: [
        {questionTitle: "Who created this quiz?", answers: ["ofek","oren","moshiko","shimon"],correctAnswerIndex: 0,userAnswerIndex: -1},
        {questionTitle: "Best movie ever created??", answers: ["Spiderman","Titanic","Metrix","Inseption"],correctAnswerIndex: 2,userAnswerIndex: -1},
        {questionTitle: "Who said 'imaginiation is more importent then knowledge?", answers: ["Leonardo De Vinich","Pablo Picaso","Albert Einstein","Pablo Escobar"],correctAnswerIndex: 2,userAnswerIndex: -1},
        {questionTitle: "The best character on game of throne?", answers: ["Daneris","John Snow","Sansa","Tirion Lanister"],correctAnswerIndex: 3,userAnswerIndex: -1},
        {questionTitle: "Guess a number?", answers: ["0","1","2","3"],correctAnswerIndex: 1,userAnswerIndex: -1}
      ] 
    })
  }
  startQuiz(quizIndex){
    this.currentQuiz=this.quizes[quizIndex];
    this.currentQuiz.started=true;
    this.startTimer();
  }
  startTimer(){
    clearInterval(this.interval);
    this.currentQuiz.time = this.maximumTime;
    this.interval = setInterval(() => {
      if(this.currentQuiz.time>0){
        this.currentQuiz.time--;
      }
      else
        this.nextQuestion();
    },1000)
  }
  stopTimer(){
    clearInterval(this.interval);
    this.currentQuiz.time = this.maximumTime;
  }
  enterAnswer(answerIndexInput){
    this.currentQuiz.questions[this.currentQuiz.currentQuestionIndex].userAnswerIndex = answerIndexInput;
  }
  nextQuestion(){
    if(this.currentQuiz.currentQuestionIndex+1!==this.currentQuiz.questions.length){
      if(this.currentQuiz.currentQuestionIndex<this.currentQuiz.questions.length){
        this.currentQuiz.currentQuestionIndex++;
        this.startTimer();
      }
      else{
        this.submitQuiz();
      }
    }
    else{
      this.submitQuiz();
    }
  }
  submitQuiz(){
    this.stopTimer();
    this.currentQuiz.submmited=true;
    this.calculateScore();
  }
  calculateScore(){
    let correctAnswersCount=0;
    let questions = this.currentQuiz.questions;
    for(let i=0;i<questions.length;i++){
      if(questions[i].correctAnswerIndex===questions[i].userAnswerIndex){
        correctAnswersCount++;
      }
    }
    this.currentQuiz.score=correctAnswersCount/questions.length*100;
  }
  restartQuiz(){
    this.currentQuiz.score=0;
    this.currentQuiz.started=false;
    this.currentQuiz.submmited=false;
    this.currentQuiz.currentQuestionIndex=0;
    this.currentQuiz.questions.forEach((question)=>{question.userAnswerIndex=-1});
  }
}
