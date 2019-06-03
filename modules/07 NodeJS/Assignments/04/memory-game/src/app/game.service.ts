import { Injectable } from "@angular/core";
import { Card } from "./card.model";

@Injectable({
  providedIn: "root"
})
export class GameService {
  cards: Card[];
  availableCards: Card[] = [];
  imgsSrc;
  hasWon: boolean;
  isGameActive: boolean;
  constructor() {
    this.cards = [];
    this.hasWon = false;
    this.isGameActive = true;
    //this.getPicsFromWeb("israel");
  }
  get gameCards(): Card[] {
    return this.cards;
  }

  getPicsFromWeb(subjectOfPics) {
    const URL = `http://localhost:5000?subjectOfPics=${subjectOfPics}`;

    fetch(URL)
      .then(response => response.json())
      .then(imglist => {
        this.imgsSrc = imglist;
        this.initAvailableCards();
        this.shuffle();
      })
      .catch(err => {
        console.log(err);
      });
  }

  initAvailableCards() {
    this.availableCards = [];
    this.imgsSrc.forEach(element => {
      this.availableCards.push({
        content: element,
        selected: false,
        correct: false
      });
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
    return selectedCards.every(
      selectedCard => selectedCard.content === card.content
    );
  }
  checkWin() {
    this.hasWon = this.cards.every(card => card.correct);
  }
}
