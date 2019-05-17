import { Injectable } from '@angular/core';
import { Question } from './question';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  questions:Question[];
  constructor() { 
    this.questions=[];
    this.createFakeQuestions();
  }
  createFakeQuestions(){
    for(let i=0;i<2;i++){
      let ID ="question" + i;
      let question = `what is John snow hair color-${i}?`
      let answers=["blue","yellow","orange","black"];
      let correctAnswerIndex = 3;
      this.questions.push(new Question(ID,question,answers,correctAnswerIndex));
    }
    for(let i=0;i<2;i++){
      let ID ="question" + i;
      let question = `what is John snow hair color-${i}?`
      let answers=["ggg","bbb","vvv","bbggg"];
      let correctAnswerIndex = 3;
      this.questions.push(new Question(ID,question,answers,correctAnswerIndex));
    }
  }
  getQuestions(){
    return this.questions;
  }
  checkResutls(){
    //return how many correct answers
  }
}
