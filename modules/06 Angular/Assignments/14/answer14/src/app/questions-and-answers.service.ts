import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root'
})

export class QuestionsAndAnswersService {

  questionsAndAnswers: any[];
  possibleAnswers: string[];
  idx: number;
  questionsNum: number;
  answeredQuestionsNum: number;
  correctAnswersNum: number;
  answeredQuestionsIDs: number[];
  errorMessage: string;
  isError: boolean;
  unansweredQuestionInTime: number;

  // Timer vars
  passedSeconds: number;
  remainedSeconds: number;
  minutesRemained: number;
  secondsRemained: number;
  currentMinutes: string;
  currentSeconds: string;
  intervalId: any;
  startMinutes: number;
  startSeconds: number;




  constructor(private utilsService: UtilsService ,private router: Router) { 
    this.questionsAndAnswers = [
      { question: "1+2", 
        correctAnswer: "3", 
        possibleAnswers: ["4", "11", "3", "22"],
        minutesToAnswer: 0,
        secondsToAnswer: 30  
      },
      { question: "5-6+1", 
        correctAnswer: "0", 
        possibleAnswers: ["0", "1", "2", "3"],
        minutesToAnswer: 0,
        secondsToAnswer: 30 
      },
      { question: "2*2", 
        correctAnswer: "4", 
        possibleAnswers: ["-2", "4", "6", "8"],
        minutesToAnswer: 0,
        secondsToAnswer: 30 
      },
      { question: "2*3/2", 
        correctAnswer: "3", 
        possibleAnswers: ["12", "1", "2", "3"],
        minutesToAnswer: 0,
        secondsToAnswer: 30 
      },
      { question: "3+5*(8+2)", 
        correctAnswer: "53", 
        possibleAnswers: ["50", "53", "56", "58"],
        minutesToAnswer: 0,
        secondsToAnswer: 40 
      },
      { question: "35/5+15/3", 
        correctAnswer: "12", 
        possibleAnswers: ["12", "14", "24", "27"],
        minutesToAnswer: 0,
        secondsToAnswer: 30 
      },
      { question: "25*4/10", 
        correctAnswer: "10", 
        possibleAnswers: ["4", "5", "8", "10"],
        minutesToAnswer: 0,
        secondsToAnswer: 30 
      },
      { question: "3+4*4+6", 
        correctAnswer: "25", 
        possibleAnswers: ["24", "25", "26", "27"],
        minutesToAnswer: 0,
        secondsToAnswer: 40 
      },
      { question: "2met+100cm", 
        correctAnswer: "3met", 
        possibleAnswers: ["2.2met", "3met", "102cm", "190cm"],
        minutesToAnswer: 2,
        secondsToAnswer: 0 
      },
      { question: "33+44/4", 
        correctAnswer: "44", 
        possibleAnswers: ["34", "38", "44", "48"],
        minutesToAnswer: 0,
        secondsToAnswer: 30 
      }
    ];

    this.errorMessage = '';

    this.possibleAnswers = [];

    this.idx = 0;

    this.questionsNum = this.questionsAndAnswers.length;
    this.answeredQuestionsNum = 0;
    this.correctAnswersNum = 0;
    this.answeredQuestionsIDs = [];

    this.isError = false;

    this.unansweredQuestionInTime = null;

    this.passedSeconds = 0;
    this.remainedSeconds = 0;
    this.currentMinutes = '00';
    this.currentSeconds = '00';
    this.startMinutes = null;
    this.startSeconds = null;

    this.getQuestionsAndAnswersArr();
    this.setDataToEachQuestion();
    this.getPossibleAnswersArraysArr();

    this.startNewCountDown(
      this.questionsAndAnswers[this.idx].minutesToAnswer, 
      this.questionsAndAnswers[this.idx].secondsToAnswer,
      this.idx);
  }


  getQuestionsAndAnswersArr(): any[] {
    // Shuffle the possibleAnswers arrays
    for(let i = 0; i < this.questionsAndAnswers.length; i++) {
      this.utilsService.shuffleArr(this.questionsAndAnswers[i].possibleAnswers); 
    }
    return this.questionsAndAnswers;
  }


  setDataToEachQuestion() {
    for(let i = 0; i < this.questionsAndAnswers.length; i++) {
      this.questionsAndAnswers[i].id = i;
      this.questionsAndAnswers[i].questionNum = i + 1;
      this.questionsAndAnswers[i].questionName = 'question_' + (i+1);
      this.questionsAndAnswers[i].userAnswer = '';
      this.questionsAndAnswers[i].isUserAnswerCorrect = false;
      this.questionsAndAnswers[i].passedMiliseconds = 0;
      this.questionsAndAnswers[i].startTimeMinutes = 0;
      this.questionsAndAnswers[i].startTimeSeconds = 0;
    }
  }


  getPossibleAnswersArraysArr() {
    for(let i = 0; i < this.questionsAndAnswers.length; i++) {
      this.possibleAnswers.push(this.questionsAndAnswers[i].possibleAnswers);
    }
    return this.possibleAnswers;
  }



  validateAnswer(e, questionsArrIndex): void {
    e.preventDefault();
    
    //e.target.checked = true;
    console.log(e.target);

    if (!this.answeredQuestionsIDs.includes(questionsArrIndex)) {
      this.answeredQuestionsNum++;
      this.answeredQuestionsIDs.push(questionsArrIndex);
    }

    if (this.questionsAndAnswers[questionsArrIndex].correctAnswer === e.target.value) {
      this.questionsAndAnswers[questionsArrIndex].isUserAnswerCorrect = true;
    }
    else {
      this.questionsAndAnswers[questionsArrIndex].isUserAnswerCorrect = false;
    }  
  }


  onclickPrevious(): void {
    this.isError = false;
    if (this.idx > 0) this.idx--;

    // Stop timer of last question
    if (this.startMinutes !== null || this.startSeconds !== null) {
      clearInterval(this.intervalId);
      this.startMinutes = null;
      this.startSeconds = null;
    }

    // Start timer of current question
    this.startNewCountDown(
      this.questionsAndAnswers[this.idx].minutesToAnswer, 
      this.questionsAndAnswers[this.idx].secondsToAnswer,
      this.idx);
  }

  onclickNext(): void {
    if (this.idx < this.questionsNum - 1) {
      this.idx++;

      // Stop timer of last question
      if (this.startMinutes !== null || this.startSeconds !== null) {
        clearInterval(this.intervalId);
        this.startMinutes = null;
        this.startSeconds = null;
      }
      // Start timer of current question
      this.startNewCountDown(
        this.questionsAndAnswers[this.idx].minutesToAnswer, 
        this.questionsAndAnswers[this.idx].secondsToAnswer,
        this.idx);

    } 
    else {
      clearInterval(this.intervalId);
      this.startMinutes = null;
      this.startSeconds = null;

      if (this.answeredQuestionsNum === this.questionsNum) {
        for (let obj of this.questionsAndAnswers) {
          if (obj.isUserAnswerCorrect === true) this.correctAnswersNum++;
        }
        this.router.navigate(['/results']);
      }
      else {
        this.isError = true;
        this.errorMessage = 'Tou must answer to the next questions: ';
        let unAnsweredQuestionsNums: number[] = [];

        for(let i: number = 0; i < this.questionsNum; i++) {
          if (!this.answeredQuestionsIDs.includes(i)) unAnsweredQuestionsNums.push(i+1);    
        }

        this.errorMessage += unAnsweredQuestionsNums;
      }
    } 
  }


  startNewCountDown(startMin, startSec, questionIndex) {
    this.startMinutes = startMin;
    this.startSeconds = startSec;
    
    this.remainedSeconds = this.startMinutes*60 + this.startSeconds - this.passedSeconds;
    
    this.intervalId = setInterval( () => {
      this.minutesRemained = Math.floor(this.remainedSeconds/60);
      this.currentMinutes = (String(this.minutesRemained));

      this.secondsRemained = this.remainedSeconds % 60;
      this.currentSeconds = (String(this.secondsRemained));

      if (this.remainedSeconds === 0) {
        clearInterval(this.intervalId);
        this.unansweredQuestionInTime = questionIndex + 1;
        //this.router.navigate(['/gameOver']);

      } 

      this.passedSeconds;
      this.remainedSeconds--;
    }, 1000);
  }

}