import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../questions.service';
import { TrivaQuestion } from '../triva.model';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  questions:TrivaQuestion[];
  constructor(private questionsService :QuestionsService) {

  /*   this.questionsService.myQuesions.subscribe(
      (myQ:TrivaQuestion[]) => console.log("my q:" + myQ)
    ); */
  }
  myClick() {



   // console.log(this.questionsService.getQuestions());
  }
  ngOnInit() {
     this.questions = this.questionsService.getQuestions();
  }

}
