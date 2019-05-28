import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { Card } from '../card.model';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  cards: Card[];
  constructor(private gameService: GameService) {
    this.cards = this.gameService.gameCards;
  }

  ngOnInit(){
    this.gameService.onStartTimer();
  }

}
