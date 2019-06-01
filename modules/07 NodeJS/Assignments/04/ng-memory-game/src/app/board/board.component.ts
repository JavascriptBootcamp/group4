import { Component, OnDestroy, ComponentRef } from '@angular/core';
import { GameService } from '../game.service';
import { Card } from '../card.model';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnDestroy{
  cards: Card[];
  //ref:ComponentRef<any>;
  constructor(private gameService: GameService) {
    this.cards = this.gameService.gameCards;
    //console.log(this.ref);
  }

  
  ngOnDestroy(){

  }

}
