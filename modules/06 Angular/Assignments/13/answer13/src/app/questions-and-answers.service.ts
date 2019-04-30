import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class QuestionsAndAnswersService {

  questionsAndAnswersArr: any[];
  correctAnswersNum: number;

  constructor() { 
    this.questionsAndAnswersArr = [
      { question: "1+2", correctAnswer: "3", possibleAnswers: ["4", "11", "3", "22"] },
      { question: "5-6+1", correctAnswer: "0", possibleAnswers: ["0", "1", "2", "3"] },
      { question: "2*2", correctAnswer: "4", possibleAnswers: ["-2", "4", "6", "8"] },
      { question: "2*3/2", correctAnswer: "3", possibleAnswers: ["12", "1", "2", "3"] },
      { question: "3+5*(8+2)", correctAnswer: "53", possibleAnswers: ["50", "53", "56", "58"] },
      { question: "35/5+15/3", correctAnswer: "12", possibleAnswers: ["12", "14", "24", "27"] },
      { question: "25*4/10", correctAnswer: "10", possibleAnswers: ["4", "5", "8", "10"] },
      { question: "3+4*4+6", correctAnswer: "25", possibleAnswers: ["24", "25", "26", "27"] },
      { question: "2met+100cm", correctAnswer: "3met", possibleAnswers: ["2.2met", "3met", "102cm", "190cm"] },
      { question: "33+44/4", correctAnswer: "44", possibleAnswers: ["34", "38", "44", "48"] }
    ];

    this.correctAnswersNum = 0;
  }


  getAllQuestionsAndAnswers(): any[] {
    // Shuffle the possibleAnswers arrays
    for(let i = 0; i < this.questionsAndAnswersArr.length; i++) {
      this.shuffleArr(this.questionsAndAnswersArr[i].possibleAnswers); 
    }
    return this.questionsAndAnswersArr;
  }


  isAnswerCorrect(userAnswer: string, indexNum: number): boolean {
    if(userAnswer === this.questionsAndAnswersArr[indexNum].correctAnswer) {
      //this.correctAnswersNum++;
      return true;
    } 
    else return false;
  }


  getCorrectAnswersNum(): number {
    return this.correctAnswersNum;
  }


  shuffleArr(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
      [array[i], array[j]] = [array[j], array[i]]; // swap elements
    }
  }
}