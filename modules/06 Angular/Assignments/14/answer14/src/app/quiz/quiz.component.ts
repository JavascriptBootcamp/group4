import { Component, OnInit } from '@angular/core';
import { ManageQuestionsService } from '../manage-questions.service';
import { Question } from '../question';
import { initDomAdapter } from '@angular/platform-browser/src/browser';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent {
  questionIndex:number;
  question:Question;
  submitted:boolean;
  score: number;
  constructor(private questionsService: ManageQuestionsService) {
    this.questionIndex=0;
    this.getData();
    this.submitted=false;
    this.score=0;
  }
  getData(){
    this.question=this.questionsService.getQuestionByID(this.questionIndex);
  }

  checkIfCorrect(answerIndex){
    this.questionsService.checkIfAnswerIsCorrect(this.questionIndex,answerIndex);
    this.getData();
  }
  nextQuestion(){
    if(this.questionIndex+1<this.questionsService.questions.length){
      this.questionIndex++;
      this.getData();
    }
  }
  prevQuestion(){
    if(this.questionIndex>0){
      this.questionIndex--;
      this.getData();
    }
  }
  onSubmit(){
    this.submitted=true;
    this.score=this.questionsService.checkUserScore();
  }
  resetQuiz(){
    this.questionIndex=0;
    this.score=0;
    this.questionsService.resetQuiz();
    this.getData();
    this.submitted=false;
  }
}
