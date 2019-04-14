import { Component, OnInit } from '@angular/core';

interface Book {
  title: string,
  author: string,
  alreadyRead: boolean,
  [propName: string]: any;
}

interface Pic {
  href: string,
  src: string,
  [propName: string]: any;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  foods: string[];
  beverages: string[];
  colors: string[];
  books: Book[];
  books2: Book[];
  imgs: Pic[];

  constructor() {
    this.foods = ['hamburger', 'BBQ', 'salad'];
    this.beverages = ['beer', 'vodka', 'coke'];
    this.colors = ['blue', 'green', 'black'];

    this.books = [
      { title: "The Hobbit", author: "J.R.R. Tolkien", alreadyRead: true },
      { title: "Harry Potter", author: "J.K Rolling", alreadyRead: false },
      { title: "The Lord Of The Rings", author: "J.R.R. Tolkien", alreadyRead: true },
    ];

    this.books2 = [
      { title: "The Hobbit", author: "J.R.R. Tolkien", alreadyRead: true, date: "September 15, 1986", publisher: "Viking", pages: 145, comments: "perfect author, perfect book." },
      { title: "Harry Potter", author: "J.K Rolling", alreadyRead: false, date: "September 15, 1986", publisher: "Viking", pages: 145, comments: "perfect author, perfect book." },
      { title: "The Lord Of The Rings", author: "J.R.R. Tolkien", alreadyRead: true, date: "September 15, 1986", publisher: "Viking", pages: 145, comments: "perfect author, perfect book." },
      { title: "Harry Potter 2", author: "J.K Rolling", alreadyRead: false, date: "September 15, 1986", publisher: "Viking", pages: 145, comments: "perfect author, perfect book." },
      { title: "The Lord Of The Rings 2", author: "J.R.R. Tolkien", alreadyRead: true, date: "September 15, 1986", publisher: "Viking", pages: 145, comments: "perfect author, perfect book." }
    ];

    this.imgs = [
      { href: "https://en.wikipedia.org/wiki/Amsterdam", src: "https://upload.wikimedia.org/wikipedia/commons/b/be/KeizersgrachtReguliersgrachtAmsterdam.jpg"},
      { href: "https://en.wikipedia.org/wiki/Moon", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/FullMoon2010.jpg/631px-FullMoon2010.jpg"},
      { href: "https://en.wikipedia.org/wiki/Tel_Aviv", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Tel_Aviv_Promenade_panoramics.jpg/800px-Tel_Aviv_Promenade_panoramics.jpg"},
      { href: "https://en.wikipedia.org/wiki/Prague", src: "https://www.prague.eu/img/pragueeu/u/property/logo-for-share-v2.jpg"},
      { href: "https://en.wikipedia.org/wiki/Holon", src: "https://www.israel21c.org/wp-content/uploads/2016/06/Photo-of-Beersheva-by-Leonard-ZhukovskyShutterstock.com_-1000x657.jpg"}
    ];
  }

  ngOnInit(): void {
  }

  switchSuffix(num: number): string {
    switch (num) {
      case 1:
        return 'st'
      case 2:
        return 'nd'
      case 3:
        return 'rd';
      default:
        return 'th';
    }
  }
}
