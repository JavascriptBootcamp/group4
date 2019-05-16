import { Component, Input, OnDestroy } from '@angular/core';
import { Card } from '../card.model';
import { GameService } from '../game.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnDestroy {
  @Input() card: Card;

  constructor(private gameService: GameService) { }

  choose() {
    this.gameService.select(this.card);
    console.log("this.gameService.gameCards", this.gameService.gameCards);
  }
  ngOnDestroy() {
    if (this.gameService.interval !== null) {
      console.log("destroy");
      this.gameService.clearIntraval();
      this.gameService.interval = null;
    }
  }
}
