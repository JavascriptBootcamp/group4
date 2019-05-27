import { Component } from '@angular/core';
import { GameService } from '../game.service';
import { Card } from '../card.model';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent {
  cards: Card[];
  constructor(private gameService: GameService) {
    this.gameService.getFromGoogle("cat").then(data => {
      data = JSON.parse(data);
      this.gameService.initAvailableCards(data);
      this.gameService.shuffle();
      this.cards = this.gameService.gameCards;
      this.gameService.setTimer();
    });

  }
}
