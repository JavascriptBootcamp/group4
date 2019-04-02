import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularansfr0305';
  //answer01
  booksObjects: object[];
  //answer02
  xmlHousesObjects: object[];

  constructor() {
    //answer01
    this.booksObjects = [
      { title: "Book1", 
        author: "Author1",
        publicationDate: "published date 1",
        publishers: "Aa, Bb",
        pagesNum: "111",
        comments: " comments about the book1"
      },
      { title: "Book2", 
        author: "Author2",
        publicationDate: "published date 2",
        publishers: "Aa, Bb",
        pagesNum: "222",
        comments: " comments about the book2"
      },
      { title: "Book3", 
        author: "Author3",
        publicationDate: "published date 3",
        publishers: "Aa, Bb",
        pagesNum: "333",
        comments: " comments about the book3"
      },
      { title: "Book4", 
        author: "Author4",
        publicationDate: "published date 4",
        publishers: "Aa, Bb",
        pagesNum: "444",
        comments: " comments about the book4"
      },
      { title: "Book5", 
        author: "Author5",
        publicationDate: "published date 5",
        publishers: "Aa, Bb",
        pagesNum: "555",
        comments: " comments about the book5"
      },
    ];
    //answer02
    this.xmlHousesObjects = [
      {
        houseName:  "house1",
        city:"Haifa",
        country:"Israel",
        roomSize: "20",
        roomColor: "white"  
      }, 

      {
        houseName: "house 2",
        city:"Jerusalem"
      }
    ];
  }
}

