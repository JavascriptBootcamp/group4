import { Component, Input } from '@angular/core';
import { ManageQuizsService } from 'src/app/services/manage-quizs.service';
import { Quiz } from 'src/app/models/quiz.model';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent{
  @Input() quiz:Quiz;
  constructor(public manageQuizsService : ManageQuizsService) { }


}
