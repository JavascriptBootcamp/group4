import { Component } from '@angular/core';

interface Ibook{
  Title:string,
  Author:string,
  Publication_date:string,
  Publisher:string,
  Pages:number,
  comments:string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  books:Ibook[];

  constructor(){
    this.books = [

     {Title: "IT",Author: "Stephen King",Publication_date: "September 15, 1986",Publisher: "Viking",Pages: 1138,comments: "perfect author, perfect book"},
     {Title: "The Dark Tower: The Gunslinger",Author: "Stephen King",Publication_date: "June 10, 1982",Publisher: "Grant",Pages: 300,comments: "perfect author, perfect series"},
     {Title: "The Dark Tower Book II: The Drawing of the Three",Author: "Stephen King",Publication_date: "May, 1987",Publisher: "Grant",Pages: 463,comments: "perfect author, perfect series"},
     {Title: "The Dark Tower Book II: The Waste Lands",Author: "Stephen King",Publication_date: "August 1991",Publisher: "Grant",Pages: 512,comments: "perfect author, perfect series"},
     {Title: "The Dark Tower IV: Wizard and Glass",Author: "Stephen King",Publication_date: "November 4, 1997",Publisher: "Grant",Pages: 787,comments: "perfect author, perfect series"},
    ]
  }
}
