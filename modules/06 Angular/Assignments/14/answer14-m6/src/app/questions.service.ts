import { Injectable, OnInit, EventEmitter } from "@angular/core";
import { TrivaQuestion } from "./triva.model";

@Injectable({
  providedIn: "root"
})
export class QuestionsService {
  quesions: TrivaQuestion[];
  correctAnswers = 0;
  answers: boolean[] = [];

  constructor() {

  this.intializeQuestionData();

  }

  intializeQuestionData(){
    this.quesions = [
      // tslint:disable-next-line: quotemark
      {
        question: "כמה כנפיים יש לפרעוש",
        answerOption: ["0", "2", "4", "6"],
        correctAnswer: 0
      },
      {
        question: "איזה איבר לא שייך למערכת העיכול",
        answerOption: ["הטחול", "פי הטבעת", "כיס המרה", "הלשון"],
        correctAnswer: 0
      },
      {
        question: 'איזו חברה מייצרת את כמות הצמיגים הגדולה ביותר',
        answerOption: ["פורמלה 1" , "לגו", "פירלי", "פורד"],
        correctAnswer: 3
      },
      {
        question: "מה השפה הרשמית באוסטרליה",
        answerOption: ["אנגלית" , "אנגלית ואורבגז'נית" , "אנגלית צרפתית וספרדית" , "אין שפה רישמית באוסטרליה"],
        correctAnswer: 3
      },
      {
        question: 'איזו חברה מפיצה את מספר הצעצועים הגדול ביותר בעולם',
        answerOption: ["טויס אר אס","סוני","מקדונלס","אולפני האחים וורנר"],
        correctAnswer: 0
      },
      {
        question: "מה המדבר הגדול בעולם",
        answerOption: ["אנטרטיקה","סהרה","הנגב","אוסטרליה"],
        correctAnswer: 0
      },
      {
        question: "כיצד נקראת נקבת הנחש",
        answerOption: ["נימפה","נחש","נחשה","נחשי"],
        correctAnswer: 2
      },
      {
        question: "איזה רכיב לא תמצאו במשקה קולה רגיל",
        answerOption: ["חומצה זרחתית","פחמן","דו מימן חד חמצני","קפאין"],
        correctAnswer: 1
      },
      {
        question: "באיזה מהחפצים הבאים יש חומר רדיואקטיבי",
        answerOption: ["טלפון סלולרי","בננה","לבנת אבסנט","מחשב נייד"],
        correctAnswer: 2
      },
      {
        question: "באיזה שיא עולמי מחזיקה חברת התעופה אל על",
        answerOption: ["אחוז איבוד המטען הגבוה ביותר" ,"הטייס הצעיר ביותר","כמות הנוסעים הכי גדולה ביותר","הדיילת המובגרת ביותר"],
        correctAnswer: 2
      },
    ];
  }

  getQuestionById (id:number) : TrivaQuestion{

    return this.quesions[id];
  }

  getQuestions(): TrivaQuestion[] {
    return this.quesions;
  }

  checkAnswer(question: TrivaQuestion, answer: number): boolean {
    if (question.correctAnswer === answer) {
      this.correctAnswers++;
      return true;
    } else return false;
  }

  correctAnswerNumbers() {
    return this.correctAnswerNumbers;
  }
  //myQuesions = new EventEmitter<TrivaQuestion[]>();
}
