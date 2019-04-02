import { Component, OnInit } from '@angular/core';
import { Actor } from './actor.model';

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.css']
})
export class ActorComponent implements OnInit {
  actors: Actor[] = null;
  constructor() {
    this.actors = [{ url: "https://www.imdb.com/name/nm0001497/",img:"https://m.media-amazon.com/images/M/MV5BMTYwMTI5NTM2OF5BMl5BanBnXkFtZTcwODk3MDQ2Mg@@._V1_.jpg",age:38,name:"Tobey Maguire"},
    {url: "https://www.imdb.com/name/nm0000098/",img:"https://m.media-amazon.com/images/M/MV5BNjk1MjIxNjUxNF5BMl5BanBnXkFtZTcwODk2NzM4Mg@@._V1_.jpg",age:50,name:"Jennifer Aniston"}];
 }
  ngOnInit() {
  }

}
