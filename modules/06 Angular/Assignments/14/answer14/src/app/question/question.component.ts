import { Component, OnInit } from '@angular/core';
import { QuestionsAndAnswersService } from '../questions-and-answers.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})


export class QuestionComponent implements OnInit {
  questionsArr: any[];
  
 
  constructor(private questionsServiceObj: QuestionsAndAnswersService) { 
    this.questionsArr = this.questionsServiceObj.questionsAndAnswers;
  }

  ngOnInit() { }

}