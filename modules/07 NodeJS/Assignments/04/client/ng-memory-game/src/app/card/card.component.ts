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
  
  constructor(private gameService: GameService) { }

  choose() {
    this.gameService.select(this.card);
    console.log("this.gameService.gameCards", this.gameService.gameCards);
  }

}
