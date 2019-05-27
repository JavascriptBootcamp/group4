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
  constructor() {
    this.cards = [];
    this.hasWon = false;
    this.isGameActive = true;
    //this.initAvailableCards(null);
    //this.shuffle();
  }
  get gameCards(): Card[] {
    return this.cards;
  }
  initAvailableCards(srcArray) {
    if (!srcArray) {
      this.availableCards = [
        { content: `assets/img/cat.png`, selected: false, correct: false },
        { content: `assets/img/dog.png`, selected: false, correct: false },
        { content: `assets/img/goldfish.png`, selected: false, correct: false },
        { content: `assets/img/guinea_pig.png`, selected: false, correct: false },
        { content: `assets/img/kitten.png`, selected: false, correct: false },
        { content: `assets/img/mouse.png`, selected: false, correct: false },
        { content: `assets/img/puppy.png`, selected: false, correct: false },
        { content: `assets/img/rabbit.png`, selected: false, correct: false },
      ];
    }
    else{
      this.availableCards = [];

      for (let i=0; i<srcArray.length; i++) {
        this.availableCards.push({ content: srcArray[i], selected: false, correct: false })
      }
    }
  }

    shuffle() {
      let randomCard, randomIndex;
      this.cards = [];
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
