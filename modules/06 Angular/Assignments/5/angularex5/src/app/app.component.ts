import { Component, OnInit } from '@angular/core';
interface Book {
  title: string;
  author: string;
  alreadyRead: boolean;
}
interface TopBook {
  title: string;
  author: string;
  publicationDate: Date;
  publisher: string;
  pages: number;
  comments: string;
}
interface picture {
  link: string;
  src: string;
  width?: number;
  height?: number;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  food: string[];
  beverage: string[];
  colors: string[];
  books: Book[];
  topBooks: TopBook[];
  pictures: picture[];
  constructor() {
    this.food = ['hamburger', 'BBQ', 'salad'];
    this.beverage = ['beer', 'vodka', 'coke'];
    this.colors = ['blue', 'green', 'black'];
    this.books = [
      { title: "The Hobbit", author: "J.R.R. Tolkien", alreadyRead: true },
      { title: "Harry Potter", author: "J.K Rolling", alreadyRead: false },
      { title: "The Lord Of The Rings", author: "Yakir Solomon", alreadyRead: true }
    ]
    this.topBooks = [
      {
        title: '"IT"', author: "Stephen King", publicationDate: new Date(1986, 9, 15),
        publisher: 'Viking', pages: 1138, comments: 'perfect author, perfect book.'
      },
      {
        title: 'The Dark Tower: The Gunslinger', author: "Stephen King", publicationDate: new Date(1982, 6, 10),
        publisher: 'Grant', pages: 300, comments: 'perfect author, perfect book.'
      },
      {
        title: 'The Dark Tower Book II: The Drawing of the Three', author: "Stephen King", publicationDate: new Date(1987, 5, 5),
        publisher: 'Grant', pages: 463, comments: 'perfect author, perfect book.'
      },
      {
        title: 'The Dark Tower III: The Waste Lands', author: "Stephen King", publicationDate: new Date(1991, 8, 12),
        publisher: 'Grant', pages: 512, comments: 'perfect author, perfect book.'
      },
      {
        title: 'The Dark Tower IV: Wizard and Glass', author: "Stephen King", publicationDate: new Date(1997, 11, 4),
        publisher: 'Grant', pages: 787, comments: 'perfect author, perfect book.'
      }
    ]
    this.pictures = [
      {
        link: 'https://en.wikipedia.org/wiki/Amsterdam', src: 'https://upload.wikimedia.org/wikipedia/commons/b/be/KeizersgrachtReguliersgrachtAmsterdam.jpg',
        width: 300, height: 200
      },
      {
        link: 'https://en.wikipedia.org/wiki/Moon', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/FullMoon2010.jpg/631px-FullMoon2010.jpg',
        width: 220, height: 200
      },
      {
        link: 'https://en.wikipedia.org/wiki/Tel_Aviv', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Tel_Aviv_Promenade_panoramics.jpg/800px-Tel_Aviv_Promenade_panoramics.jpg',
        width: 300, height: 200
      },
      {
        link: 'https://en.wikipedia.org/wiki/Prague', src: 'https://www.prague.eu/img/pragueeu/u/property/logo-for-share-v2.jpg',
        width: 300, height: 200
      },
      {
        link: 'https://en.wikipedia.org/wiki/Holon', src: 'https://www.israel21c.org/wp-content/uploads/2016/06/Photo-of-Beersheva-by-Leonard-ZhukovskyShutterstock.com_-1000x657.jpg',
        height: 200
      },
      {
        link: 'https://en.wikipedia.org/wiki/Amsterdam', src: 'https://upload.wikimedia.org/wikipedia/commons/b/be/KeizersgrachtReguliersgrachtAmsterdam.jpg',
        width: 300, height: 200
      },
      {
        link: 'https://en.wikipedia.org/wiki/Amsterdam', src: 'https://upload.wikimedia.org/wikipedia/commons/b/be/KeizersgrachtReguliersgrachtAmsterdam.jpg',
        width: 300, height: 200
      },
      {
        link: 'https://en.wikipedia.org/wiki/Amsterdam', src: 'https://upload.wikimedia.org/wikipedia/commons/b/be/KeizersgrachtReguliersgrachtAmsterdam.jpg',
        width: 300, height: 200
      }
    ]
  }
  ngOnInit() {

  }
}
