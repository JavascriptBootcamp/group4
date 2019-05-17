import { Component, OnInit, Input, OnDestroy, Output,EventEmitter } from '@angular/core';
import { Question } from '../question.model';
import { QuestionService } from '../questions.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit, OnDestroy {
// @Input()question: Question;
@Output() createdCompEvent: EventEmitter<number>;
  constructor(private questionService: QuestionService) {
    this.createdCompEvent = new EventEmitter();
   }

  ngOnInit() {
    if(this.questionService.getSelection() !== -1)
    {
      this.createdCompEvent.emit(this.questionService.getSelection());
    }
    this.questionService.startTimer();
  }

  ngOnDestroy(){
    this.questionService.resetTimer();
  }

}
