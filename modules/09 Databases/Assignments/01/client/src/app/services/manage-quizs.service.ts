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
    this.getQuiz();
   }

  async getQuiz(){

    const response = await fetch("http://127.0.0.1:8000/quiz");
    const data = await response.json();
    this.quizes.push({
      time: this.maximumTime,
      quizIndex: 0,
      quizName: "Non Sense",
      started:false,
      submmited: false,
      currentQuestionIndex: 0,
      score: 0,
      questions: data
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
    console.log(this.currentQuiz.questions[this.currentQuiz.currentQuestionIndex])
    console.log(this.quizes[0].questions)
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
      if(questions[i].correctAnswerIndex==questions[i].userAnswerIndex){
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
        body: JSON.stringify({
          player: this.player
        })
      });
      const scores = await fetch("http://localhost:8000/high-score");
      const data = await scores.json();
      console.log(data);
      this.highScore = data;
      console.log(this.highScore);
  }
}

// getHighScores(){

// }