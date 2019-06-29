import { Component } from '@angular/core';
import { ManageQuizsService } from './services/manage-quizs.service';
import { Quiz } from './models/quiz.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public manageQuizsService : ManageQuizsService) {
  }
}
