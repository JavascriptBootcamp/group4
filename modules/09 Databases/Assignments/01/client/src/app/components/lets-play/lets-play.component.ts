import { Component } from '@angular/core';
import { ManageQuizsService } from 'src/app/services/manage-quizs.service';

@Component({
  selector: 'app-lets-play',
  templateUrl: './lets-play.component.html',
  styleUrls: ['./lets-play.component.css']
})
export class LetsPlayComponent {

  constructor(public manageQuizsService : ManageQuizsService) { }

}
