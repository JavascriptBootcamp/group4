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
  submitScore: boolean;
  topTen: boolean;
  scores: any[];
  constructor(public questionsService: QuestionsService) {
    this.submit = false;
    this.submitScore = false;
    this.scores = [];
  }

  ngOnInit() {
  }
  async onSubmit(form: NgForm) {
    this.questionsService.checkAnswers(form);
    this.topTen = await this.questionsService.isTopTen();
    this.submit = true;
  }
  sendScore(form: NgForm) {
    this.submitScore = true;
    const obj = { name: form.value.name, score: this.questionsService.correctAnswers };
    fetch("http://localhost:8000/score", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(obj)
    }).then(res => res.json()).then(data => {
      this.scores = data;
    })
  }
}
