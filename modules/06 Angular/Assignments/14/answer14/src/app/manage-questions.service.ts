import { Injectable } from '@angular/core';
import { Question } from './question';

@Injectable({
  providedIn: 'root'
})
export class ManageQuestionsService {
  questions: Question[];
  constructor() { 
    this.questions=this.createFakeQuestions();
  }
  createFakeQuestions(){
    let tempArray = [
      new Question(1,"Who created this quiz?",["ofek","oren","moshiko","shimon"],0),
      new Question(1,"Best movie ever created?",["Spiderman","Titanic","Metrix","Inseption"],2),
      new Question(1,"Who said 'imaginiation is more importent then knowledge'?",["Leonardo De Vinich","Pablo Picaso","Albert Einstein","Pablo Escobar"],2),
      new Question(1,"The best character on game of throne?",["Daneris","John Snow","Sansa","Tirion Lanister"],3),
      new Question(1,"Guess a number?",["0","1","2","3"],1),
    ]
    return tempArray;
  }
  getQuestionByID(index){
    return this.questions[index];
  }
  checkIfAnswerIsCorrect(questionIndex,answerIndex){
    this.questions[questionIndex].userAnswer = answerIndex;
    if(this.questions[questionIndex].correctAnswerIndex===answerIndex)
      this.questions[questionIndex].userWasCorrect=true;
    else
      this.questions[questionIndex].userWasCorrect=false;
  }

}
