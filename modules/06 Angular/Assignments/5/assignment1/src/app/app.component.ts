import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    books : object[];

    constructor()
    {
      this.books = [
        {Title: "IT", Author: "Stephen King", PublicationDate : "September 15, 1986", Publisher:"Viking", Pages:"1138", Comments: "Perfect author, perfect book"},
        {Title: "The Dark Tower: The Gunslinger", Author: "Stephen King", PublicationDate : "June 10, 1982", Publisher:"Grant", Pages:"300", Comments: "Perfect author, perfect series"},
        {Title: "IT", Author: "Stephen King", PublicationDate : "September 15, 1986", Publisher:"Viking", Pages:"1138", Comments: "Perfect author, perfect book"},
        {Title: "IT", Author: "Stephen King", PublicationDate : "September 15, 1986", Publisher:"Viking", Pages:"1138", Comments: "Perfect author, perfect book"},
        {Title: "IT", Author: "Stephen King", PublicationDate : "September 15, 1986", Publisher:"Viking", Pages:"1138", Comments: "Perfect author, perfect book"}
      ]
    }
}
