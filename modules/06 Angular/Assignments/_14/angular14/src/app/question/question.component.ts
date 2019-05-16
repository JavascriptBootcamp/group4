import { Component, OnInit, Input, OnDestroy  } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit, OnDestroy {
  @Input() time: number;
  @Input() interval: number;
  constructor() {
  }
  ngOnInit() {
    
  }
  ngOnDestroy() {
    clearInterval(this.interval);
  }
}
