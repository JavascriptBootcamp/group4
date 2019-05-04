import { Injectable } from '@angular/core';
import { Question } from './question.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  questionS:Question[]
  constructor() { this.fillQuestionS();}

  fillQuestionS()
  {
    this.questionS=[ { question:" What's the name of England queen?",correctAnswer:"Elizebeth the 1st" },
    {question:" What's the surname of current U.S. president? ",correctAnswer:"Tramp"}
    ,{question:" When was JFK murdered? ",correctAnswer:"1951"}
    ,{question:"  Where was JFK murdered? ",correctAnswer:"Dallas"}
    ,{question:" What's the name of the 1st drummer of the Beatles?",correctAnswer:"Ringo"}
    ,{question:" What's the name of England queen before 500 years?",correctAnswer:"Elizebeth the 4th"}
    ,{question:" What's the surname of last U.S. president before Trump?",correctAnswer:"Obama"}
    ,{question:"When was JFK murdered? ",correctAnswer:"1951"}
    ,{question:"Where was JFK murdered? ",correctAnswer:"Dallas"}
    ,{question:"What's the name of the 2nd drummer of the Beatles? ",correctAnswer:"Ringo"}

    ];
    
  }
  getQuestions():Question[]
  {
    return this.questionS;
  }
  getNumberOfCurrenetAnswer(values):number
  {
   
    var CurrenetAnswer=0;
   

    for (let index in values) {
      if(values[index] ===  this.questionS[index].correctAnswer)
      {
      // console.log(values[index] ,this.questionS[index].correctAnswer)

        CurrenetAnswer++;
      }
     

  
  }
    return CurrenetAnswer;
  }
}
