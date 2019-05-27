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
  timer: number;
  interval: any;
  constructor() {
    this.timer = 0;
    this.interval = null;
    this.cards = [];
    this.hasWon = false;
    this.isGameActive = true;
    //this.initAvailableCards();
    //this.shuffle();
  }
  setTimer(): void {
    this.interval = setInterval(() => {
      this.timer++;
    }, 1000);
  }
  clearIntraval(): void {
    clearInterval(this.interval);
  }
  get getTimer(): number {
    return this.timer;
  }
  get gameCards(): Card[] {
    return this.cards;
  }
  getFromGoogle(keyword) {
    return fetch('http://localhost:5000/?keyword=' + keyword).then(response => response.text());
  }
  initAvailableCards(cards) {
    if (!cards) {
      this.availableCards = [
        { content: "assets/img/cat", selected: false, correct: false },
        { content: "assets/img/dog", selected: false, correct: false },
        { content: "assets/img/goldfish", selected: false, correct: false },
        { content: "assets/img/guinea_pig", selected: false, correct: false },
        { content: "assets/img/kitten", selected: false, correct: false },
        { content: "assets/img/mouse", selected: false, correct: false },
        { content: "assets/img/puppy", selected: false, correct: false },
        { content: "assets/img/rabbit", selected: false, correct: false },
      ]
    }
    else {
      this.availableCards = [];
      for (let card of cards) {
        this.availableCards.push(
          { content: card, selected: false, correct: false }
        );
      }
    }
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
