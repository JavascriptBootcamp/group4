import { Component, OnInit } from '@angular/core';
import { Answer } from '../answer.model';
import { AnswerService } from '../answer.service';
import { Question } from '../question.model';
import { QuestionService } from '../question.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  answers:Answer[];
  questions:Question[];
  hidden : boolean;
  correctAnswers: number;
  constructor(private answerService:AnswerService,private questionService:QuestionService) {  this.hidden = false;}

  ngOnInit() {
    this.answers=this.answerService.getAnswers();
    this.questions=this.questionService.getQuestions();
  }
  submitForm(event, value: any){
    event.preventDefault();
    this.hidden = true;
    this.correctAnswers=this.questionService.getNumberOfCurrenetAnswer(value);
  //   console.log(this.questionService.getNumberOfCurrenetAnswer(value))
  //   for (let index in value) {

  //     console.log(value[index])
  // }
    console.log(value)
    // console.log(form["q"+ 9])
      // this.questionService.setCorrectAnswers(0);
      // this.questionService.setAnswers(form);
  }

}
