import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  books: Object[];

  constructor(){
    this.title = 'q52';
    this.books = [
      {title: "The Hobbit",author: "J.R.R. Tolkien",alreadyRead: true},
      {title: "Harry Potter",author: "J.K Rolling",alreadyRead: false},
      {title: "The Lord Of The Rings",author: "Yakir Solomon",alreadyRead: true},
    ]


  }
}



// for (var i=0;i<books.length;i++){
//   console.log(books[i].title + " by " + books[i].author);
// }

// for (var i=0;i<books.length;i++){
//   if(books[i].alreadyRead)
//       console.log("You already read " + "''" + books[i].title + "'' by " + books[i].author);
//   else
//       console.log("You still need to read " + "''" + books[i].title + "'' by " + books[i].author);
// }

