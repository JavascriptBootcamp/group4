import { Component, OnInit, Input } from '@angular/core';
import { AnswerService } from '../answer.service';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {
  @Input() answer: string;
  @Input() name: string;

  constructor(private answerService:AnswerService) { }

  ngOnInit() {
    console.log(this.answer)
    // this.answers=this.answerService.fillQuestionS();

  }

}
