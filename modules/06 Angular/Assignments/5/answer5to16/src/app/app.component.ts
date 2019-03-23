import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'answer5toModule01Answer16';

  booksObjects: object[];

  constructor() {
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
