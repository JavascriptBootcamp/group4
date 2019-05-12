import { Component, OnInit } from '@angular/core';
import {Question} from '../question.module';
import {QuizService} from '../quiz.service'
@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  questions:Question[]
  constructor(private quizService:QuizService) { 
    this.questions = [];
  }

  ngOnInit() {


  }

}
