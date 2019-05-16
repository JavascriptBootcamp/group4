import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../questions.service';
import { Question } from '../question.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-trivia',
  templateUrl: './trivia.component.html',
  styleUrls: ['./trivia.component.css']
})
export class TriviaComponent implements OnInit {
  questions: Question[];
  currentRadioSelection: number;

  interval: any;
  timer: number;

  constructor(private questionService: QuestionService) { 
    this.questions = [];
    this.timer = 5;
    this.currentRadioSelection = -1;

  }

  ngOnInit() {
    this.questions = this.questionService.getQuestions();
    this.startTimer();
  }

  // ngAfterContentChecked(){
  //   this.interval = setInterval(() => {
  //     this.timer--;
  //     if (this.timer === 0)
  //       clearInterval(this.interval);
  //   }, 1000);
  // }

  onSubmit(event, form: NgForm){
    event.preventDefault();
      this.questionService.setCorrectAnswers(0);
      //this.questionService.setAnswers(form);
  }

  onPrevClicked( form: NgForm){
    const currentQuestionId = this.questionService.getCurrentQuestionId();
    const questionKey = 'q' + (currentQuestionId+1);
    const answer = form[questionKey].current;
    this.questionService.setAnswer(currentQuestionId,this.currentRadioSelection,answer);

    this.questionService.setCurrentQuestionId( this.questionService.getCurrentQuestionId()-1);
    this.startTimer();
  }

  onNextClicked(event, form: NgForm){
    const currentQuestionId = this.questionService.getCurrentQuestionId();
    const questionKey = 'q' + (currentQuestionId+1);
    const answer = form[questionKey].current;
    this.questionService.setAnswer(currentQuestionId,this.currentRadioSelection,answer);

    this.questionService.setCurrentQuestionId( this.questionService.getCurrentQuestionId()+1);
    this.startTimer();
  }

  setCurrentRadioSelection(currentRadioSelection: number){
    this.questionService.setAnswerIndex(currentRadioSelection);
  }

  nextQuestion(){
    const currentQuestionId = this.questionService.getCurrentQuestionId();
    if(currentQuestionId < 10){
      this.questionService.setCurrentQuestionId(currentQuestionId+1);
      this.startTimer();
    }
  }

  startTimer(){
    this.timer = 5;
    if(this.interval)
      clearInterval(this.interval);
    this.interval = setInterval(() => {
      this.timer--;
      if (this.timer === 0){
        clearInterval(this.interval);
        if(this.questionService.getCurrentQuestionId() < 10)
          this.nextQuestion();
      }
    }, 1000);
  }


}
