import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'q53';
  books: object[];
  
  constructor(){
    this.books = [
      {Title: "The Dark Tower: The Gunslinger", Author: "Stephen King",PublicationDate: "September 15, 1986",Publisher: "Viking",Pages: "1,138",Comments: "perfect author, perfect book."},
      {Title: "The Dark Tower Book II: The Drawing of the Three", Author: "Stephen King",PublicationDate: "May, 1987",Publisher: "Grant",Pages: "463",Comments: "perfect author, perfect series."},
      {Title: "The Dark Tower III: The Waste Lands", Author: "Stephen King",PublicationDate: "August 1991",Publisher: "Grant",Pages: "512",Comments: "perfect author, perfect series."},
      {Title: "The Dark Tower IV: Wizard and Glass", Author: "Stephen King",PublicationDate: "November 4, 1997",Publisher: "Grant",Pages: "778",Comments: "perfect author, perfect series"}
    ];
  }
}
