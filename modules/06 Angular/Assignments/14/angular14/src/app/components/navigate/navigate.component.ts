import { Component, OnInit } from '@angular/core';
import { QuestionsService } from 'src/app/service/questions.service';

@Component({
  selector: 'app-navigate',
  templateUrl: './navigate.component.html',
  styleUrls: ['./navigate.component.css']
})
export class NavigateComponent implements OnInit {

  constructor(public questionsService: QuestionsService) { }

  ngOnInit() {
  }

}
