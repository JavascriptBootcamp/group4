import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular5-a3';
  books: Book[] = [];
  constructor() {
    this.books.push(new Book("IT", "Stephen King", "September 15, 1986", "Viking", 138, "perfect author, perfect book."));
    this.books.push(new Book("The Dark Tower: The Gunslinger", "Stephen King", "June 10, 1982", "Grant", 300, "perfect author, perfect series."));
    this.books.push(new Book("The Dark Tower Book II: The Drawing of the Three", "Stephen King", "May, 1987", "Grant", 463, "perfect author, perfect series."));
    this.books.push(new Book("The Dark Tower III: The Waste Lands", "Stephen King", "August 1991", "Grant", 512, "perfect author, perfect series."));
  }

}
class Book {
   title: string;
   author: string;
   publicationDate: string;
   publisher: string;
   page: number;
   comments: string;
  constructor(title: string, author: string, publicationDate: string, publisher: string, page: number, comments: string) {
    this.title = title;
    this.author = author;
    this.publicationDate = publicationDate;
    this.publisher = publisher;
    this.page = page;
    this.comments = comments;
  }
}
