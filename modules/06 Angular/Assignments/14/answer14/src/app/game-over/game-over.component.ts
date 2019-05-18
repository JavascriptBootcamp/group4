import { Component, OnInit } from '@angular/core';
import { QuestionsAndAnswersService } from '../questions-and-answers.service';

@Component({
  selector: 'app-game-over',
  templateUrl: './game-over.component.html',
  styleUrls: ['./game-over.component.css']
})
export class GameOverComponent implements OnInit {

  constructor(private questionsServiceObj: QuestionsAndAnswersService) { }

  ngOnInit() {}

}
