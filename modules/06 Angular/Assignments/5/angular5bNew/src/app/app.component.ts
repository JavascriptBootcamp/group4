import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  books: object[];
  constructor(private titleService : Title) {
    this.titleService.setTitle("Books | Favorites");
    this.books = [
      {
        Title: "IT", Author: "Stephen King", Publicationdate: "September 15, 1986", Publisher: "Viking",
        Pages: 138, comments: "perfect author, perfect book."
      },
      {
        Title: "The Dark Tower: The Gunslinger", Author: "Stephen King", Publicationdate: "June 10, 1982", Publisher: "Grant",
        Pages: 300, comments: "perfect author, perfect series."
      },
      {
        Title: "The Dark Tower Book II: The Drawing of the Three", Author: "Stephen King", Publicationdate: "May, 1987", Publisher: "Grant",
        Pages: 463, comments: "perfect author, perfect series."
      },
      {
        Title: "The Dark Tower III: The Waste Lands", Author: "Stephen King", Publicationdate: "August 1991", Publisher: "Grant",
        Pages: 512, comments: "perfect author, perfect series."
      },
      {
        Title: "The Dark Tower IV: Wizard and Glass", Author: "Stephen King", Publicationdate: "November 4, 1997", Publisher: "Grant",
        Pages: 787, comments: "perfect author, perfect series."
      }
    ];
  }
}