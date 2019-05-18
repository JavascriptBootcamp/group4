import { Component, OnInit, OnDestroy } from '@angular/core';
import { QuestionsService } from 'src/app/service/questions.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-trivia',
  templateUrl: './trivia.component.html',
  styleUrls: ['./trivia.component.css']
})
export class TriviaComponent implements OnInit {
  submit: boolean;
  currentIndex: number;
  urlIndex: number;
  endQuiz: boolean;

  constructor(public questionsService: QuestionsService,
    private activatedRoute: ActivatedRoute,
  ) {
    this.submit = false;
    this.currentIndex = 0;
  }

  ngOnInit() {
   
  }
    ngOnDestroy(){
console.log("d");    }

ngAfterContentChecked(){
  if (this.activatedRoute.snapshot.params.id != "endQuiz"){
    this.currentIndex = Number(this.activatedRoute.snapshot.params.id);
}
  else {
  this.endQuiz = true;
  }
}

  onSubmit(form: NgForm) {
    this.questionsService.checkAnswers(form);
    this.submit = true;
  }

  switchQuestion(side: number) {
    if (side === 1)
      this.currentIndex++;
    else
      this.currentIndex--;
  }

}
