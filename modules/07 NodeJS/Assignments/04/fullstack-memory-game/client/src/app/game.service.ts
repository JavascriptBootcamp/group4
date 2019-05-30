import { Injectable } from '@angular/core';
import { Card } from './card.model';

@Injectable({
  providedIn: 'root'
})

export class GameService {
  cards: Card[];
  availableCardsImagesSources: string[];
  availableCards: Card[];
  hasWon: boolean;
  isGameActive: boolean;


  constructor() {
    this.cards = [];
    this.hasWon = false;
    this.isGameActive = true;
    this.availableCardsImagesSources = [];
    this.availableCards = [];
    this.initAvailableCards();
   }


  get gameCards(): Card[] {
    return this.cards;
  }


  initAvailableCards() {
    fetch(`http://localhost:5000/?robot`)
    .then( res => {
      return res.json();
    })
    .then( imagesSources => {
      this.availableCardsImagesSources = imagesSources;

      this.availableCardsImagesSources.forEach( imgSrc => {
        this.availableCards.push({content: imgSrc, selected: false, correct: false});
      })

      this.shuffle();
    })
    .catch(function(err){
      console.log(err);
    });
  }


  shuffle() {
    let randomCard, randomIndex;

    let allCards: Card[] = this.availableCards.concat(this.availableCards);

    while (allCards.length > 0) {
        randomIndex = Math.floor(Math.random() * allCards.length);
        randomCard = allCards.splice(randomIndex, 1);
        this.cards.push({...randomCard[0]});
    }
    console.log(this.cards);
  }


  select(card: Card){
     console.log("selected card", card);

     const selectedCards = this.cards.filter( card => card.selected);

     card.selected = true;

     if (selectedCards.length === 1){
       this.isGameActive = false;

      if (this.isMatch(card, selectedCards)){
        selectedCards[0].correct = true;
        card.correct = true;
        this.checkWin();
      }

      setTimeout( ()=> {
        this.isGameActive = true;
        selectedCards[0].selected = false;
        card.selected = false;
      }, 1000);

    }
  }


   isMatch(card: Card, selectedCards: Card[]) {
     return selectedCards.every( selectedCard => selectedCard.content === card.content );
   }


   checkWin() {
      this.hasWon = this.cards.every(card => card.correct);
   }
}
