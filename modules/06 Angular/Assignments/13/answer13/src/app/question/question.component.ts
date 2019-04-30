import { Component, OnInit } from '@angular/core';
import { QuestionsAndAnswersService } from '../questions-and-answers.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})


export class QuestionComponent implements OnInit {

  POSSIBLE_ANSWERS_TOTAL_NUM: number;
  QUANTITY_OF_QUESTIONS: number;
  questionsAndAnswersArr: any[];
  arrayOfPossibleAnswersArrays: string[];
  correctAnswersNum: number;
  answeredQuestionsNum: number;
  unAnsweredQuestionsNum: number;
  nonAnsweredQuestionsMessage: string;
  correctAnswersCount: number;
  areAllQuestionsAnswered: boolean;
  unansweredQuestionsCount: number;


  constructor(private questionsAndAnswersServiceObj: QuestionsAndAnswersService) { 
    this.questionsAndAnswersArr = this.questionsAndAnswersServiceObj.getAllQuestionsAndAnswers(); 
    this.correctAnswersNum = 0;
    this.answeredQuestionsNum = 0;
    this.unAnsweredQuestionsNum = 0;
    this.arrayOfPossibleAnswersArrays = [];
    this.getArrayOfPossibleAnswersArrays();
    this.POSSIBLE_ANSWERS_TOTAL_NUM = 40;
    this.QUANTITY_OF_QUESTIONS = 10;
    this.nonAnsweredQuestionsMessage = '';
    this.correctAnswersCount = 0;
    //this.areAllQuestionsAnswered = false;

    console.log(this.questionsAndAnswersArr);
  }


  getArrayOfPossibleAnswersArrays() {
    for(let i = 0; i < this.questionsAndAnswersArr.length; i++) {
      this.arrayOfPossibleAnswersArrays.push(this.questionsAndAnswersArr[i].possibleAnswers);
    }
    return this.arrayOfPossibleAnswersArrays;
  }



  validateAnswers(e: Event) {
    e.preventDefault();
    
    this.answeredQuestionsNum = 0;
    this.correctAnswersCount = 0;
    this.questionsAndAnswersServiceObj.correctAnswersNum = 0;

    for (let i = 0; i < this.POSSIBLE_ANSWERS_TOTAL_NUM; i++) {

      if (e.srcElement[i].checked && i >= 0 && i <= 3) {
        this.answeredQuestionsNum++;

        // Check if answer is correct
        if (this.questionsAndAnswersServiceObj.isAnswerCorrect(e.srcElement[i].value, 0)) {
          this.questionsAndAnswersServiceObj.correctAnswersNum++;
        }

        // Check if answer is correct
        // if (e.srcElement[i].value === this.questionsAndAnswersArr[0].correctAnswer) {
        //   this.correctAnswersCount++;
        // }
      }
      
      if (e.srcElement[i].checked && i >= 4 && i <= 7) {
        this.answeredQuestionsNum++;

        if (this.questionsAndAnswersServiceObj.isAnswerCorrect(e.srcElement[i].value, 1)) {
          this.questionsAndAnswersServiceObj.correctAnswersNum++;
        }
      }

      if (e.srcElement[i].checked && i >= 8 && i <= 11) {
        this.answeredQuestionsNum++;

        if (this.questionsAndAnswersServiceObj.isAnswerCorrect(e.srcElement[i].value, 2)) {
          this.questionsAndAnswersServiceObj.correctAnswersNum++;
        }
      }

      if (e.srcElement[i].checked && i >= 12 && i <= 15) {
        this.answeredQuestionsNum++;

        if (this.questionsAndAnswersServiceObj.isAnswerCorrect(e.srcElement[i].value, 3)) {
          this.questionsAndAnswersServiceObj.correctAnswersNum++;
        }
      }

      if (e.srcElement[i].checked && i >= 16 && i <= 19) {
        this.answeredQuestionsNum++;

        if (this.questionsAndAnswersServiceObj.isAnswerCorrect(e.srcElement[i].value, 4)) {
          this.questionsAndAnswersServiceObj.correctAnswersNum++;
        }
      }

      if (e.srcElement[i].checked && i >= 20 && i <= 23) {
        this.answeredQuestionsNum++;

        if (this.questionsAndAnswersServiceObj.isAnswerCorrect(e.srcElement[i].value, 5)) {
          this.questionsAndAnswersServiceObj.correctAnswersNum++;
        }
      }

      if (e.srcElement[i].checked && i >= 24 && i <= 27) {
        this.answeredQuestionsNum++;

        if (this.questionsAndAnswersServiceObj.isAnswerCorrect(e.srcElement[i].value, 6)) {
          this.questionsAndAnswersServiceObj.correctAnswersNum++;
        }
      }

      if (e.srcElement[i].checked && i >= 28 && i <= 31) {
        this.answeredQuestionsNum++;

        if (this.questionsAndAnswersServiceObj.isAnswerCorrect(e.srcElement[i].value, 7)) {
          this.questionsAndAnswersServiceObj.correctAnswersNum++;
        }
      }

      if (e.srcElement[i].checked && i >= 32 && i <= 35) {
        this.answeredQuestionsNum++;

        if (this.questionsAndAnswersServiceObj.isAnswerCorrect(e.srcElement[i].value, 8)) {
          this.questionsAndAnswersServiceObj.correctAnswersNum++;
        }
      }

      if (e.srcElement[i].checked && i >= 36 && i <= 39) {
        this.answeredQuestionsNum++;

        if (this.questionsAndAnswersServiceObj.isAnswerCorrect(e.srcElement[i].value, 9)) {
          this.questionsAndAnswersServiceObj.correctAnswersNum++;
        }
      }

    }

    this.correctAnswersCount = this.questionsAndAnswersServiceObj.correctAnswersNum;

    if (this.answeredQuestionsNum < this.QUANTITY_OF_QUESTIONS) {
      this.areAllQuestionsAnswered = false;
      this.unansweredQuestionsCount = this.QUANTITY_OF_QUESTIONS - this.answeredQuestionsNum;
    }
    else if (this.answeredQuestionsNum === this.QUANTITY_OF_QUESTIONS) {
      this.areAllQuestionsAnswered = true;

      for (let i = 0; i < this.POSSIBLE_ANSWERS_TOTAL_NUM; i++) {
        e.srcElement[i].disabled = true;
      }
    }
  }

  ngOnInit() {}
}