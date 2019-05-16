import { Component } from '@angular/core';
import { GameService } from '../game.service';
import { Card } from '../card.model';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit{
  cards: Card[];
  constructor(private gameService: GameService) {
    this.cards = this.gameService.gameCards;
  }

  ngOnInit(){
    this.gameService.startTimer();
  }

  

}
