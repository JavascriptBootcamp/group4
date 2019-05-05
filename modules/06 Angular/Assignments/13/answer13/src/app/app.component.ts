import { Component } from '@angular/core';
import {ActionsService} from './actions.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  questions: object[];

  constructor(private actionsService:ActionsService){
    this.questions = this.actionsService.getQuestionsList();
  }
}
