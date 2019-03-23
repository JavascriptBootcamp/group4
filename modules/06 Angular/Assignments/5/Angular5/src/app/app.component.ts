import { Component, OnInit } from '@angular/core';
interface book {
  Title: string,
  Author: string,
  PublicationDate: string,
  Publisher: string,
  Pages: number,
  comments: string
}
interface image{
  aHref: string;
  imgSrc: string;
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
  str: any;
  _books: book[];
  books: any;
  images: image[];

  constructor() {
    this.food = ['hamburger', 'BBQ', 'salad'];
    this.beverage = ['beer', 'vodka', 'coke'];
    this.colors = ['blue', 'green', 'black'];
    this.str = '';

    this.books = [
      { title: "The Hobbit", author: "J.R.R. Tolkien", alreadyRead: true },
      { title: "Harry Potter", author: "J.K Rolling", alreadyRead: false },
      { title: "The Lord Of The Rings", author: "Yakir Solomon", alreadyRead: true },
    ]
    this._books = [
                    {
                      Title:"IT",
                      Author:"Stephen King",
                      PublicationDate: "September 15, 1986",
                      Publisher: "Viking",
                      Pages: 1138,
                      comments: "perfect author, perfect series."
                    },
                    {
                      Title:"The Dark Tower: The Gunslinger",
                      Author:"Stephen King",
                      PublicationDate: "June 10, 1982",
                      Publisher: "Grant",
                      Pages: 300,
                      comments: "perfect author, perfect series."
                    },
                    {
                      Title:"The Dark Tower Book II: The Drawing of the Three",
                      Author:"Stephen King",
                      PublicationDate: "May, 1987",
                      Publisher: "Grant",
                      Pages: 463,
                      comments: "perfect author, perfect series."
                    },
                    {
                      Title:"The Dark Tower III: The Waste Lands",
                      Author:"Stephen King",
                      PublicationDate: "November 4, 1997",
                      Publisher: "Grant",
                      Pages: 787,
                      comments: "perfect author, perfect series."
                    },
                    {
                      Title:"The Dark Tower IV: Wizard and Glass",
                      Author:"Stephen King",
                      PublicationDate: "November 4, 1997",
                      Publisher: "Grant",
                      Pages: 787,
                      comments: "perfect author, perfect series."
                    }
                  ];
    this.images = null;
  }

  
  
  ngOnInit() {
    this.fillStr();
    this.images = [
                    {
                      aHref: "https://en.wikipedia.org/wiki/Amsterdam",
                      imgSrc: "https://upload.wikimedia.org/wikipedia/commons/b/be/KeizersgrachtReguliersgrachtAmsterdam.jpg"
                    },
                    {
                      aHref: "https://en.wikipedia.org/wiki/Moon",
                      imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/FullMoon2010.jpg/631px-FullMoon2010.jpg"
                    },
                    {
                      aHref: "https://en.wikipedia.org/wiki/Tel_Aviv",
                      imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Tel_Aviv_Promenade_panoramics.jpg/800px-Tel_Aviv_Promenade_panoramics.jpg"
                    },
                    {
                      aHref: "https://en.wikipedia.org/wiki/Prague",
                      imgSrc: "https://www.prague.eu/img/pragueeu/u/property/logo-for-share-v2.jpg"
                    },
                    {
                      aHref: "https://en.wikipedia.org/wiki/Prague",
                      imgSrc: "https://www.prague.eu/img/pragueeu/u/property/logo-for-share-v2.jpg"
                    },
                    {
                      aHref: "https://en.wikipedia.org/wiki/Prague",
                      imgSrc: "https://www.prague.eu/img/pragueeu/u/property/logo-for-share-v2.jpg"
                    }
                  ]
  }



  fillStr = (): void => {
    for (let i: number = 0; i < this.food.length; i++) {
      this.str += 'My ' + (i + 1) + this.switchSuffix(i + 1) + ' choice is ' + this.food[i];
      if (i !== this.food.length - 1) {
        this.str += ', '
      }
    }

    for (let i: number = 0; i < this.beverage.length; i++) {
      this.str += 'My ' + (i + 1) + this.switchSuffix(i + 1) + ' choice is ' + this.beverage[i];
      if (i !== this.beverage.length - 1) {
        this.str += ', '
      }
    }

    for (let i: number = 0; i < this.colors.length; i++) {
      this.str += 'My ' + (i + 1) + this.switchSuffix(i + 1) + ' choice is ' + this.colors[i];
      if (i !== this.colors.length - 1) {
        this.str += ', '
      }
    }
    this.str = this.str.split(',');
  }


  switchSuffix = (num: number): string => {
    switch (num) {
      case 1:
        return 'st'
      case 2:
        return 'nd'
      case 3:
        return 'rd';
      case 4:
        return 'th';
    }

  }
}
