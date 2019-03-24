import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  books:object[];

  constructor () {
    this.books = [
      {title: "IT",author: "Stephen King",publishedDate: 1/1/2019,publisher:"Viking",pageCounter:120,comments:"Good Book"},
      {title: "The Hobbit",author: "J.R.R. Tolkien",publishedDate: 1/1/2019,publisher:"Michael",pageCounter:220,comments:"Good Book"},
      {title: "The Hobbit",author: "J.R.R. Tolkien",publishedDate: 1/1/2019,publisher:"Michael",pageCounter:320,comments:"Good Book"},
      {title: "The Hobbit",author: "J.R.R. Tolkien",publishedDate: 1/1/2019,publisher:"Michael",pageCounter:420,comments:"Good Book"},
      {title: "The Hobbit",author: "J.R.R. Tolkien",publishedDate: 1/1/2019,publisher:"Michael",pageCounter:520,comments:"Good Book"}]
  }
}
