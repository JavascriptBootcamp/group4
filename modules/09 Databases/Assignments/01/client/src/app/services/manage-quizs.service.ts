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
  player:any;
  highScore:object[];

  constructor() {
    this.player={name:'',
                score:0};
    this.maximumTime = 5;
    this.quizes = [];
    this.currentQuiz = null;
    this.highScore = [];
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
  startQuiz(quizIndex,_playerName){
    this.currentQuiz=this.quizes[quizIndex];
    this.currentQuiz.started=true;
    this.player.name =_playerName;
    //console.log(this.player.name);
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
    //this.
    //this.getHighScores();
    this.currentQuiz.submmited=true;
    this.calculateScore();
    this.postPlayerScore();
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
    this.player.score=this.currentQuiz.score;
    console.log(this.player.score);
  }
  restartQuiz(){
    this.currentQuiz.score=0;
    this.currentQuiz.started=false;
    this.currentQuiz.submmited=false;
    this.currentQuiz.currentQuestionIndex=0;
    this.currentQuiz.questions.forEach((question)=>{question.userAnswerIndex=-1});
  }
  async postPlayerScore(){
      const response = await fetch("http://localhost:8000/high-score",{
        method:'POST',
        headers:{'content-Type': 'application/json'},
        body: JSON.stringify({player: this.player})
      });
      const data = await response.json();
      console.log(data);
      this.highScore = data;
      console.log(this.highScore);
  }
}

// getHighScores(){

// }