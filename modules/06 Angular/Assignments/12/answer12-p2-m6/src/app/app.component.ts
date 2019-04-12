import { Component, OnInit } from '@angular/core';
interface Iactor {
  name: string;
  imdb: string;
  age: number;
  img: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  actors: Iactor[] = [];

  ngOnInit() {
    this.actors = [
      {
        name: "Arnold Schwarzenegge",
        imdb: "https://www.imdb.com/name/nm0000216",
        age: 71,
        img: "https://m.media-amazon.com/images/M/MV5BMTI3MDc4NzUyMV5BMl5BanBnXkFtZTcwMTQyMTc5MQ@@._V1_.jpg"
      },
      {
        name: "Bruce Lee ",
        imdb: "https://www.imdb.com/name/nm0000045",
        age: 1973,
        img: "https://m.media-amazon.com/images/M/MV5BMTUwMTg4NDkzMV5BMl5BanBnXkFtZTYwMjU4Nzc2._V1_.jpg"
      },
      {
        name: "Sylvester Stallone",
        imdb: "https://www.imdb.com/name/nm0000230",
        age: 72,
        img: "https://m.media-amazon.com/images/M/MV5BMTQwMTk3NDU2OV5BMl5BanBnXkFtZTcwNTA3MTI0Mw@@._V1_.jpg"
      },
      {
        name: "Jean-Claude Van Damme",
        imdb: "https://www.imdb.com/name/nm0000241/",
        age: 58,
        img: "https://m.media-amazon.com/images/M/MV5BMTA2OTE1Njg4NjVeQTJeQWpwZ15BbWU3MDAyNjU4MDM@._V1_SY1000_CR0,0,812,1000_AL_.jpg"
      },
      {
        name: "Chuck Norris",
        imdb: "https://www.imdb.com/name/nm0001569/",
        age: 78,
        img: "https://m.media-amazon.com/images/M/MV5BMTU4NjY3NzgyM15BMl5BanBnXkFtZTcwODI4OTEzNA@@._V1_SY1000_CR0,0,789,1000_AL_.jpg"
      }

    ]
  }
}

