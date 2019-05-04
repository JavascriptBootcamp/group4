import { Component, OnInit, Input } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';
import { Question } from 'src/app/models/Question.model';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  constructor(private quizService: QuizService) {

  }

  ngOnInit() {
  }

}
