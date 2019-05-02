import { Injectable, OnInit, EventEmitter } from '@angular/core';
import { TrivaQuestion } from './triva.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  quesions: TrivaQuestion[];
  constructor() {
    this.quesions = [
// tslint:disable-next-line: quotemark
      { id: "q1", question: "כמה כנפיים יש לפרעוש ?", answerId: "answer1" },
      {
        id: 'q2',
        question: 'איזה איבר לא שייך למערכת העיכול?',
        answerId: 'answer2'
      },
      {
        id: 'q3',
        question: 'איזו חברה מייצרת את כמות הצמיגים הגדולה ביותר?',
        answerId: 'answer3'
      },
      { id: 'q4', question: 'מה השפה הרשמית באוסטרליה?', answerId: 'answer4' },
      {
        id: 'q5',
        question: 'איזו חברה מפיצה את מספר הצעצועים הגדול ביותר בעולם? ',
        answerId: 'answer5'
      },
      {
        id: 'q6',
        question: 'מהו המדבר הגדול ביותר בעולם ?',
        answerId: 'answer6'
      },
      { id: 'q7', question: 'כיצד נקראת נקבת הנחש?', answerId: 'answer7' },
      {
        id: 'q8',
        question: 'איזה רכיב לא תמצאו במשקה קולה רגיל?',
        answerId: 'answer8'
      },
      {
        id: 'q9',
        question: 'באיזה מהחפצים הבאים יש חומר רדיואקטיבי?',
        answerId: 'answer9'
      },
      {
        id: 'q10',
        question: 'באיזה שיא עולמי מחזיקה חברת התעופה אל על',
        answerId: 'answer10'
      }
    ];
  }

  getQuestions() {
    return this.quesions;
  }
  //myQuesions = new EventEmitter<TrivaQuestion[]>();
}
