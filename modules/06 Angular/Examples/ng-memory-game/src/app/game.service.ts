import { Injectable } from '@angular/core';
import { Card } from './card.model';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  cards: Card[];
  availableCards: Card[];
  hasWon: boolean;
  isGameActive: boolean;
  interval:any;
  minutes:any;
  sec:any;
  constructor() {
    this.cards = [];
    this.hasWon = false;
    this.isGameActive = true;
    this.interval = null;
    this.sec = "00";
    this.minutes = "00";
    this.initAvailableCards();
    this.shuffle();
    this.startTimer();
   }
   get gameCards(): Card[] {
     return this.cards;
   }
   initAvailableCards() {
     this.availableCards = [
       {content: "cat", selected: false, correct: false},
       {content: "dog", selected: false, correct: false},
       {content: "goldfish", selected: false, correct: false},
       {content: "guinea_pig", selected: false, correct: false},
       {content: "kitten", selected: false, correct: false},
       {content: "mouse", selected: false, correct: false},
       {content: "puppy", selected: false, correct: false},
       {content: "rabbit", selected: false, correct: false},
     ]
   }
   shuffle() {
    let randomCard, randomIndex;
    let allCards: Card[] = this.availableCards.concat(this.availableCards);
    while (allCards.length > 0) {
        randomIndex = Math.floor(Math.random() * allCards.length);
        randomCard = allCards.splice(randomIndex, 1);
        // this.cards.push(randomCard[0]);
        // this.cards.push(JSON.parse(JSON.stringify(randomCard[0])));
        this.cards.push({
          ...randomCard[0]
          /*
            content: "",
            selected: "",
            correct: ""
          */
        });
    }
   }
   select(card: Card){
     console.log("select", card);
     const selectedCards = this.cards.filter( card => card.selected);
     card.selected = true;
     if (selectedCards.length === 1){
       this.isGameActive = false;
       setTimeout( ()=> {
        this.isGameActive = true;
        selectedCards[0].selected = false;
        card.selected = false;
       }, 1000);

       if (this.isMatch(card, selectedCards)){
          selectedCards[0].correct = true;
          card.correct = true;
          this.checkWin();
       }
     }
   }
   isMatch(card: Card, selectedCards: Card[]) {
     return selectedCards.every( selectedCard => selectedCard.content === card.content );
   }
  
   startTimer(){
    this.interval = setInterval(() => {
      
      if (this.sec == 59 && this.minutes < 9) {
        this.minutes = "0" + ++this.minutes;
        this.sec = "00";
      }
      else
      if (this.sec == 59 && this.minutes > 9) {
        this.minutes = ++this.minutes;
        this.sec = "00";
      }
      else
      this.sec = this.sec < 9 ? "0" + ++this.sec : ++this.sec;

    }, 1000);
   }
   checkWin() {
      this.hasWon = this.cards.every(card => card.correct);
      if(this.hasWon){
        clearInterval(this.interval);
      }
   }
}
