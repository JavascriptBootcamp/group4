import { Component } from '@angular/core';
import { GameService } from '../game.service';
import { Card } from '../card.model';
import { ImagesService } from '../images.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent {
  cards: Card[];
  constructor(private gameService: GameService,private imagesService: ImagesService) {
    // this.cards = this.gameService.gameCards;
    this.imagesService.getImages("colors").then(data=>{
      data = JSON.parse(data);
      gameService.initAvailableCards(data);
      gameService.shuffle();
      this.cards = this.gameService.gameCards;

    });
  }

  

}
