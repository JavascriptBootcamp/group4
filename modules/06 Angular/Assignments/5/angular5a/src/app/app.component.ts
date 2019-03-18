import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  books: object[];
  constructor() {
    this.books = [
      { title: "The Hobbit", author: "J.R.R. Tolkien", alreadyRead: true },
      { title: "Harry Potter", author: "J.K Rolling", alreadyRead: false },
      { title: "The Lord Of The Rings", author: "Yakir Solomon", alreadyRead: true }
    ]
  }
}
