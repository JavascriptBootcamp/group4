import { Component } from '@angular/core';
import { Actor } from './actor.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular12-a2';
  actors: Actor[];
  constructor() {
    this.actors = [
      { name: "Tobey Maguire", age: 38, imgSrc: "https://m.media-amazon.com/images/M/MV5BMTYwMTI5NTM2OF5BMl5BanBnXkFtZTcwODk3MDQ2Mg@@._V1_.jpg", url: "https://www.imdb.com/name/nm0001497/" },
      { name: "Jennifer Aniston", age: 50, imgSrc: "https://m.media-amazon.com/images/M/MV5BNjk1MjIxNjUxNF5BMl5BanBnXkFtZTcwODk2NzM4Mg@@._V1_.jpg", url: "https://www.imdb.com/name/nm0000098/" },
      { name: "Scarlett Johansson", age: 38, imgSrc: "https://m.media-amazon.com/images/M/MV5BMTM3OTUwMDYwNl5BMl5BanBnXkFtZTcwNTUyNzc3Nw@@._V1_UY317_CR23,0,214,317_AL_.jpg", url: "https://www.imdb.com/name/nm0424060/" },
      { name: "Hugh Jackman", age: 40, imgSrc: "https://m.media-amazon.com/images/M/MV5BNDExMzIzNjk3Nl5BMl5BanBnXkFtZTcwOTE4NDU5OA@@._V1_UX214_CR0,0,214,317_AL_.jpg", url: "https://www.imdb.com/name/nm0413168/" }
    ]
  }
}