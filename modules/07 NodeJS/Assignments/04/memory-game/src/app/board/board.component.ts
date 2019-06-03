import { Component, AfterViewInit,
  ElementRef,
  ViewChild,
  DoCheck} from '@angular/core';
import { GameService } from '../game.service';
import { Card } from '../card.model';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements AfterViewInit{
  cards: Card[];
  @ViewChild ('subject') subject:ElementRef;
   constructor(private gameService: GameService) {

  }


ngAfterViewInit(){
  this.startToPlay();
}


startToPlay() {
console.log(this.subject.nativeElement.value);
  this.gameService.cards = [];
  this.gameService.getPicsFromWeb(this.subject.nativeElement.value);
  this.cards = this.gameService.gameCards;
}
}
