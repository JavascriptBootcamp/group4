import { Injectable } from '@angular/core';
import { Quiz } from '../models/quiz.model';
import { stringify } from '@angular/compiler/src/util';
import { startTimeRange } from '@angular/core/src/profile/wtf_impl';

@Injectable({
  providedIn: 'root'
})
export class ManageQuizsService {
  quizes: Quiz[];
  currentQuiz: Quiz;
  time: number;
  maximumTime: number;
  interval: any;

  constructor() {
    this.maximumTime = 5;
    this.time=this.maximumTime;
    this.quizes = [];
    this.currentQuiz = null;
    this.addFakeQuiz();
   }

  addFakeQuiz(){
    this.quizes.push({
      quizIndex: 0,
      quizName: "non sense",
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
    this.time = this.maximumTime;
    if(!this.interval){
      this.interval = setInterval(() => {
        if(this.time>0){
          this.time--;
        }
        else
          this.nextQuestion();
      },1000)
    }
    else{
      clearInterval(this.interval);
      this.startTimer();
    }
  }
  stopTimer(){
    clearInterval(this.interval);
    this.time = this.maximumTime;
  }
  enterAnswer(answerIndexInput){
    this.currentQuiz.questions[this.currentQuiz.currentQuestionIndex].userAnswerIndex = answerIndexInput;
  }
  nextQuestion(){
    if(this.currentQuiz.currentQuestionIndex<this.currentQuiz.questions.length){
      this.currentQuiz.currentQuestionIndex++;
      this.startTimer();
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
    this.currentQuiz.questions.forEach((question)=>{question.userAnswerIndex=-1});
  }
}
