import { Injectable } from '@angular/core';
import { Actor } from "../modules/actor.interface";

@Injectable({
  providedIn: 'root'
})

export class ActorsService {

  data: Actor[];

  constructor() {
    this.data = [{
      name: "Tobey Maguire",
      age: 38,
      info_url: "https://www.imdb.com/name/nm0001497/",
      img_url: "https://m.media-amazon.com/images/M/MV5BMTYwMTI5NTM2OF5BMl5BanBnXkFtZTcwODk3MDQ2Mg@@._V1_.jpg"
    },
    {
      name: "Jennifer Aniston",
      age: 50,
      info_url: "https://www.imdb.com/name/nm0000098/",
      img_url: "https://m.media-amazon.com/images/M/MV5BNjk1MjIxNjUxNF5BMl5BanBnXkFtZTcwODk2NzM4Mg@@._V1_.jpg"
    },
    {
      name: "Scarlett Johansson",
      age: 38,
      info_url: "https://www.imdb.com/name/nm0424060/",
      img_url: "https://m.media-amazon.com/images/M/MV5BMTM3OTUwMDYwNl5BMl5BanBnXkFtZTcwNTUyNzc3Nw@@._V1_UY317_CR23,0,214,317_AL_.jpg"
    },
    {
      name: "Hugh Jackma",
      age: 40,
      info_url: "https://www.imdb.com/name/nm0413168/",
      img_url: "https://m.media-amazon.com/images/M/MV5BNDExMzIzNjk3Nl5BMl5BanBnXkFtZTcwOTE4NDU5OA@@._V1_UX214_CR0,0,214,317_AL_.jpg"
    },
    {
      name: "Daniel Radcliffe",
      age: 29,
      info_url: "https://www.imdb.com/name/nm0705356/",
      img_url: "https://m.media-amazon.com/images/M/MV5BMTg4NTExODc3Nl5BMl5BanBnXkFtZTgwODUyMDEzMDE@._V1_UY317_CR11,0,214,317_AL_.jpg"
    }
  ];

  }

  getData(): Actor[] {
    return this.data;
  }
}
