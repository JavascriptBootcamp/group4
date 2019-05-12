import { Component, OnInit } from '@angular/core';
import { QuestionsService } from 'src/app/service/questions.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-trivia',
  templateUrl: './trivia.component.html',
  styleUrls: ['./trivia.component.css']
})
export class TriviaComponent implements OnInit {
  submit: boolean;

  constructor(public questionsService: QuestionsService) {
    this.submit = false;
  }

  ngOnInit() {
  }
  onSubmit(form: NgForm) {
    this.questionsService.checkAnswers(form);
    this.submit = true;
  }
}
