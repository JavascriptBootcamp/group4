import { Component, OnInit, Input } from '@angular/core';
import { ManageQuizsService } from 'src/app/services/manage-quizs.service';
import { Quiz } from 'src/app/models/quiz.model';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['../quiz/quiz.component.css']
})
export class QuestionsComponent{
  @Input() quiz:Quiz;
  constructor(public manageQuizsService : ManageQuizsService) { }

}
