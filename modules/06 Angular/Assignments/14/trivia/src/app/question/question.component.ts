import { Component, OnInit, OnChanges, SimpleChanges, Input,EventEmitter, Output} from '@angular/core';
import { Question } from '../question.module'
import { TriviaService } from '../trivia.service'
@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit, OnChanges {
  @Input() question: Question;
  @Input() sec: number;
  isCorrect: boolean;
  answerIndex: string;
  answersCounter:number;
  clearIntervalFlag: boolean;
  @Output() incrementToAnswersCounter = new EventEmitter<number>();
  constructor(private triviaService: TriviaService) {
    this.question = null;
    this.isCorrect = null;
    this.answerIndex = null;
    this.answersCounter = 0;
    this.clearIntervalFlag = false;
  }

  isAnswerCorrect(index: string) {
    this.question.clicked = true;
    this.question.answerIndex = index;
    this.answersCounter++;
    this.incrementToAnswersCounter.emit(this.answersCounter);
    this.isCorrect = this.triviaService.isCorrect(this.question.question_id, index)
  }

  getClass(index) {
    if (this.question.clicked && this.question.answerIndex === index) {
      this.isCorrect = this.triviaService.isCorrect(this.question.question_id, index);
      if (this.isCorrect) {
        return "correct";
      }
      else if (!this.isCorrect) {
        return "unCorrect";
      }
    }

    return null;
  }


  ngOnChanges(changes: SimpleChanges) {

    if (changes.question && changes.question.currentValue !== changes.question.previousValue) {
      this.answerIndex = null;
      this.isCorrect = null;
    }

    if (changes.sec && changes.sec.currentValue === 0) {
      this.clearIntervalFlag = true;
      if(!this.question.clicked){
        this.answersCounter++;
        this.incrementToAnswersCounter.emit(this.answersCounter);
        this.question.clicked = true;
      }
      
    }
    else if (changes.sec && changes.sec.currentValue > 0) {
      this.clearIntervalFlag = false;
    }
  }

  ngOnInit() {
  }



}
