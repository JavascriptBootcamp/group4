import { Component, Input } from '@angular/core';
import { Card } from '../card.model';
import { GameService } from '../game.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() card: Card;
  gameActive;
  constructor(private gameService: GameService) {
  this.gameActive = gameService.isGameActive;
  }

  choose() {
    this.gameService.select(this.card);
    console.log("this.gameService.gameCards", this.gameService.gameCards);
  }

}
