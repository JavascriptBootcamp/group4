import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //answer 14
  favoriteColors: string[];
  //answer 16
  booksObjects: object[];

  constructor() {
    //answer14
    this.favoriteColors = ['green', 'blue', 'black', '#66ccff', '#ccffcc'];
    //answer16
    this.booksObjects = [
      {
          title: 'book1',
          author: 'writer1',
          alreadyRead: true
      },
      {
          title: 'book2',
          author: 'writer2',
          alreadyRead: false
      },
      {
          title: 'book3',
          author: 'writer3',
          alreadyRead: true
      }
    ];
  }
}
