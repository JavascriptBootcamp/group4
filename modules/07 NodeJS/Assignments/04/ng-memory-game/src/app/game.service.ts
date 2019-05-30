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
  showCards:boolean;
  constructor() {
    this.cards = [];
    this.hasWon = false;
    this.isGameActive = true;
    this.availableCards = [];
    this.showCards = false;
    // this.initAvailableCards();
    //this.shuffle();
  }
  get gameCards(): Card[] {
    return this.cards;
  }
  async initAvailableCards(search) {
   
    const response = await fetch('http://localhost:7000?searchName=' + search)
    .then( response => response.text() )
   
    const srcArr = JSON.parse(response);
    for(let i=0;i<srcArr.length;i++){
      this.availableCards.push({
        content: srcArr[i], selected: false, correct: false
      })
    }
    this.shuffle();
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
    this.showCards = true;
  }
  select(card: Card) {
    console.log("select", card);
    const selectedCards = this.cards.filter(card => card.selected);
    card.selected = true;
    if (selectedCards.length === 1) {
      this.isGameActive = false;
      setTimeout(() => {
        this.isGameActive = true;
        selectedCards[0].selected = false;
        card.selected = false;
      }, 1000);

      if (this.isMatch(card, selectedCards)) {
        selectedCards[0].correct = true;
        card.correct = true;
        this.checkWin();
      }
    }
  }
  isMatch(card: Card, selectedCards: Card[]) {
    return selectedCards.every(selectedCard => selectedCard.content === card.content);
  }
  checkWin() {
    this.hasWon = this.cards.every(card => card.correct);
  }
}