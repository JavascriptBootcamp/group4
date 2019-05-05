import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../questions.service';
import { Question } from '../question.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
        questions:Question[];
        correctAnswersAmount:number;
        toDisplay:boolean;
  constructor(private questionService:QuestionsService) {this.correctAnswersAmount=0; this.toDisplay=true;}

  ngOnInit() {
    this.getQuestions();
  }

  getQuestions(){
    this.questions=this.questionService.getQuestionsNAnswers();
    
  }


  submitForm(event, form: NgForm){
    event.preventDefault();
     this.correctAnswersAmount= this.questionService.allUserAnswers(form);
     this.toDisplay=false;
  }










}
