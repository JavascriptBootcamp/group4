import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'angular5-a2';
  books: Book[] = [];
  constructor() {
    this.books.push(new Book("The Hobbit", "J.R.R Tolkien", true));
    this.books.push(new Book("Harry Potter","J.K Rolling",true));
    this.books.push(new Book("Lord Of The Ring", "J.R.R Tolkien", false));
  }
}
class Book {
  title: string;
  author: string;
  alreadyRead: boolean;
  constructor(title: string, author: string, alreadyRead: boolean) {
    this.title = title;
    this.author = author;
    this.alreadyRead = alreadyRead;
  }
}