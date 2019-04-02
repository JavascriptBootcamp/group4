import { Component } from '@angular/core';
interface actor{
  name : string;
  age : number;
  link : string;
  img : string;
}
@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.css']
})
export class ActorComponent {
  actors : actor[];
  constructor() { 
    this.actors = [
      {name:"Tobey Maguire",age:38,link:"https://www.imdb.com/name/nm0001497/",img:"https://m.media-amazon.com/images/M/MV5BMTYwMTI5NTM2OF5BMl5BanBnXkFtZTcwODk3MDQ2Mg@@._V1_.jpg"},
      {name:"Jennifer Aniston",age:50,link:"https://www.imdb.com/name/nm0000098/",img:"https://m.media-amazon.com/images/M/MV5BNjk1MjIxNjUxNF5BMl5BanBnXkFtZTcwODk2NzM4Mg@@._V1_.jpg"},
      {name:"Scarlett Johansson",age:38,link:"https://www.imdb.com/name/nm0424060/",img:"https://m.media-amazon.com/images/M/MV5BMTM3OTUwMDYwNl5BMl5BanBnXkFtZTcwNTUyNzc3Nw@@._V1_UY317_CR23,0,214,317_AL_.jpg"},
    ]
  }
}
