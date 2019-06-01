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
    this.cards = this.gameService.gameCards;
  }

  searchImages(event ,serchInput:string){
    event.preventDefault();
    this.gameService.initAvailableCards(serchInput);
    //this.gameService.shuffle();
  }


}
