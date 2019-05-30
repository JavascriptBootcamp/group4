import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
   x:any;
  constructor(private gameService: GameService) { }

  searchImages(event,serchInput){
    event.preventDefault();
    this.gameService.initAvailableCards(serchInput.value);
    //this.gameService.shuffle();
  }


  ngOnInit() {
   
  }

}
