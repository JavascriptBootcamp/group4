import { Component } from '@angular/core';
import { Actor } from './actor.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  actors: Actor[];

  constructor() {
    this.actors = [
      { link: "https://www.imdb.com/name/nm0001497/", image: "https://m.media-amazon.com/images/M/MV5BMTYwMTI5NTM2OF5BMl5BanBnXkFtZTcwODk3MDQ2Mg@@._V1_.jpg", age: 38, name: "Tobey Maguire" },
      { link: "https://www.imdb.com/name/nm0000098/", image: "https://m.media-amazon.com/images/M/MV5BNjk1MjIxNjUxNF5BMl5BanBnXkFtZTcwODk2NzM4Mg@@._V1_.jpg", age: 50, name: "Jennifer Aniston" },
      { link: "https://www.imdb.com/name/nm0424060/", image: "https://m.media-amazon.com/images/M/MV5BMTM3OTUwMDYwNl5BMl5BanBnXkFtZTcwNTUyNzc3Nw@@._V1_UY317_CR23,0,214,317_AL_.jpg", age: 38, name: "Scarlett Johansson" },
      { link: "https://www.imdb.com/name/nm0413168/", image: "https://m.media-amazon.com/images/M/MV5BNDExMzIzNjk3Nl5BMl5BanBnXkFtZTcwOTE4NDU5OA@@._V1_UX214_CR0,0,214,317_AL_.jpg", age: 40, name: "Hugh Jackman" },
      { link: "https://www.imdb.com/name/nm0705356/", image: "https://m.media-amazon.com/images/M/MV5BMTg4NTExODc3Nl5BMl5BanBnXkFtZTgwODUyMDEzMDE@._V1_UY317_CR11,0,214,317_AL_.jpg", age: 29, name: "Daniel Radcliffe" }
    ];
  }
}
