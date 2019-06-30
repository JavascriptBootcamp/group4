import { Component } from '@angular/core';
import { ManageQuizsService } from 'src/app/services/manage-quizs.service';

@Component({
  selector: 'app-submit-high-score',
  templateUrl: './submit-high-score.component.html',
  styleUrls: ['./submit-high-score.component.css']
})
export class SubmitHighScoreComponent{

  constructor(public manageQuizsService : ManageQuizsService) { }

}
