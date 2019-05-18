import { Component, OnInit, ViewChild } from '@angular/core';
import { QuestionsService } from 'src/app/service/questions.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-trivia',
  templateUrl: './trivia.component.html',
  styleUrls: ['./trivia.component.css']
})
export class TriviaComponent implements OnInit {
  @ViewChild('form') form: NgForm;

  constructor(public questionsService: QuestionsService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.questionsService.initGame();
    this.questionsService.currentIndex = Number(this.activatedRoute.snapshot.params.id);
    this.questionsService.tmpIndex = this.questionsService.currentIndex;
    this.questionsService.form = this.form;
    this.questionsService.startCountDown();
  }
  nextQuestion(): void {
    this.questionsService.nextQuestion();
  }
  prevQuestion(): void {
    this.questionsService.prevQuestion();
  }
  onSubmit() {
    this.questionsService.onSubmit();
  }
  ngAfterContentChecked(): void {
    if (this.questionsService.timer.time === "00:00") {
      this.nextQuestion();
    }
  }
  ngOnDestroy(): void {
    this.questionsService.currentIndex = 1;
    this.questionsService.stop();
  }
}
