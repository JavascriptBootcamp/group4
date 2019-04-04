import { Component } from '@angular/core';
interface IBook {
  title: string;
  author: string;
  alredyRead: boolean;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  title = 'answer05-q16';

  book1: IBook;
  book2: IBook;
  book3: IBook;
  booksArr: IBook[] = [];

  constructor() {
    this.book1 = { title: "The picture of Dorian Grey", author: "Oscar Wilde", alredyRead: true };
    this.book2 = { title: "IT", author: "Stephen King", alredyRead: true };
    this.book3 = { title: "Dark Tower", author: "Stephen King", alredyRead: false };

    this.booksArr.push(this.book1);
    this.booksArr.push(this.book2);
    this.booksArr.push(this.book3);
  }
}