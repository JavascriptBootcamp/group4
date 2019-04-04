import { Component } from '@angular/core';

interface IBook {
  title: string,
  author: string,
  publichationDate: string,
  publisher: string,
  pages: number,
  comments: string

}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'answer05-q1';
  booksArr: IBook[];

  constructor(){
    this.booksArr = [
      {title: "IT", author: "Stephen King", publichationDate: "September 15, 1986", publisher: "Viking", pages: 1138, comments: "perfect author, perfect book."},
      {title: "The Dark Tower: The Gunslinger", author: "Stephen King", publichationDate: "June 10, 1982", publisher: "Grant", pages: 300, comments: "perfect author, perfect series."},
      {title: "The Dark Tower Book II: The Drawing of the Three", author: "Stephen King", publichationDate: "May, 1987", publisher: "Grant", pages: 463, comments: "perfect author, perfect series."},
      {title: "The Dark Tower III: The Waste Lands", author: "Stephen King", publichationDate: "August 1991", publisher: "Grant", pages: 512, comments: "perfect author, perfect book."},
      {title: "The Dark Tower IV: Wizard and Glass", author: "Stephen King", publichationDate: "November 4, 1997", publisher: "Grant", pages: 787, comments: "perfect author, perfect book."}
    ];
  }
}
