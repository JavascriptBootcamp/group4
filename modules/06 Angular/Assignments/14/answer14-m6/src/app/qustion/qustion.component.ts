import { Component, OnInit, Input } from '@angular/core';
import { TrivaQuestion } from '../triva.model';
import { QuestionsService } from '../questions.service';

@Component({
  selector: 'app-qustion',
  templateUrl: './qustion.component.html',
  styleUrls: ['./qustion.component.css']
})
export class QustionComponent implements OnInit {

  @Input() qustion : TrivaQuestion;
  @Input() q : number;



  constructor(private questionsService: QuestionsService) { }

  ngOnInit() {

  }

  fun(input, correctAnswer, i:number) {
    if (input.value === correctAnswer) {
      this.questionsService.answers[i] = true;
    } else this.questionsService.answers[i] = false;
  }

}
