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
  interval: any;
  secString: string;
  minString: string;
  level: number;

  constructor() {
    this.level = 0;
    this.cards = [];
    this.initAvailableCards();
    this.restart();
  }

  restart() {
    this.level++;
    this.hasWon = false;
    this.isGameActive = false;
    this.shuffle();
    this.secString = "00";
    this.minString = "00";
    if (this.level > 1)
      for (let c of this.cards) {
        c.correct = false;
        c.selected = false;
      }
  }

  get gameCards(): Card[] {
    return this.cards;
  }
  initAvailableCards() {
    this.availableCards = [
      { content: "cat", selected: false, correct: false },
      { content: "dog", selected: false, correct: false },
      { content: "goldfish", selected: false, correct: false },
      { content: "guinea_pig", selected: false, correct: false },
      { content: "kitten", selected: false, correct: false },
      { content: "mouse", selected: false, correct: false },
      { content: "puppy", selected: false, correct: false },
      { content: "rabbit", selected: false, correct: false },
    ]
  }
  shuffle() {
    let randomCard, randomIndex;
    let allCards: Card[];
    if (this.level === 1) {
      allCards = this.availableCards.concat(this.availableCards);
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
    else {  //random cards in new game
      this.cards.sort(function (a, b) { return 0.5 - Math.random() });
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
    if (this.hasWon) {
      clearInterval(this.interval);
      this.interval = null;
    }
  }

  startTimer() {

    if (this.hasWon)
      this.restart();

    let sec: number = 0;
    let min: number = 0;
    this.isGameActive = true;
    this.interval = setInterval(() => {
      sec++;
      if (sec === 60) {
        sec = 0;
        min++;
      }

      if (sec < 10)
        this.secString = "0" + sec;
      else
        this.secString = sec + "";
      if (min < 10)
        this.minString = "0" + min;
      else
        this.minString = min + "";
    }, 1000);
  }
}
