import { Component , OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 books:object[];

      ngOnInit(){      
   this.books = [
    {title: "IT" ,author: "Stephen King",pubdate:" September 15, 1986",publisher:"Viking",pages: 1138,comments: "perfect author, perfect book"},
    {title: "The Dark Tower" ,author: " Stephen King",pubdate:" June 10, 1982",publisher:" Grant",pages:300,comments: "perfect author, perfect series."},
    {title: "The Dark Tower Book II: The Drawing of the Three" ,author: "Stephen King",pubdate:"  May, 1987",publisher:"Viking",pages:  463,comments: "wonderfull"},
    {title: "The Dark Tower III: The Waste Lands" ,author: "Stephen King",pubdate:" November 4, 1997",publisher:"Viking",pages: 512,comments: "awesome!"}
];
   }
   }
