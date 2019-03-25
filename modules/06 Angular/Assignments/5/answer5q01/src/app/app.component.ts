import { Component } from '@angular/core';

interface Book {
  title: string;
  authors: string;
  publishedDate: string;
  publishers: string;
  pageCount: number;
  comments: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  books: Book[];

  constructor() {
    this.books = [{
      title: "'IT'",
      authors: "Stephen King",
      publishedDate: "September 15, 1986",
      publishers: "Viking",
      pageCount: 1138,
      comments: "perfect author, perfect book."
    }, {
      title: "The Dark Tower: The Gunslinger",
      authors: "Stephen King",
      publishedDate: "June 10, 1982",
      publishers: "Grant",
      pageCount: 300,
      comments: "perfect author, perfect series."
    }, {
      title: "The Dark Tower Book II: The Drawing of the Three",
      authors: "Stephen King",
      publishedDate: "May, 1987",
      publishers: "Grant",
      pageCount: 463,
      comments: "perfect author, perfect series."
    }, {
      title: "The Dark Tower III: The Waste Lands",
      authors: "Stephen King",
      publishedDate: "August 1991",
      publishers: "Grant",
      pageCount: 512,
      comments: "perfect author, perfect series."
    }, {
      title: "The Dark Tower IV: Wizard and Glass",
      authors: "Stephen King",
      publishedDate: "November 4, 1997",
      publishers: "Grant",
      pageCount: 787,
      comments: "perfect author, perfect series."
    }]
  }
}

