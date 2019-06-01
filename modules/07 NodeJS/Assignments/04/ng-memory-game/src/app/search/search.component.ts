import { Component } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent  {

  constructor(private gameService: GameService) { }

 
  replaceImages(searchString){
    this.gameService.replaceCardsImages(searchString);
  }

}
