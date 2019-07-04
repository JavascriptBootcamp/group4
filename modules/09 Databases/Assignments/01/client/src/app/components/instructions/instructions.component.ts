import { Component, Input } from '@angular/core';
import { Quiz } from 'src/app/models/quiz.model';
import { ManageQuizsService } from 'src/app/services/manage-quizs.service';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['../quiz/quiz.component.css']
})
export class InstructionsComponent {
  @Input() quiz:Quiz;
  constructor(public manageQuizsService : ManageQuizsService) { }

}
