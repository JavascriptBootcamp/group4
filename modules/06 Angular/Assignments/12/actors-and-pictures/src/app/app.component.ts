import { Component } from '@angular/core';
import {Actor} from './actor.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  actors:Actor[]


  constructor(){
   this.actors = [
     {name:"Tobey Maguire",age:"38",picture:{link:"https://www.imdb.com/name/nm0001497/",src:"https://m.media-amazon.com/images/M/MV5BMTYwMTI5NTM2OF5BMl5BanBnXkFtZTcwODk3MDQ2Mg@@._V1_.jpg"}},
     {name:"Jennifer Aniston",age:"20",picture:{link:"https://www.imdb.com/name/nm0000098/",src:"https://m.media-amazon.com/images/M/MV5BNjk1MjIxNjUxNF5BMl5BanBnXkFtZTcwODk2NzM4Mg@@._V1_.jpg"}},
     {name:"Scarlett Johansson",age:"50",picture:{link:"https://www.imdb.com/name/nm0424060/",src:"https://m.media-amazon.com/images/M/MV5BMTM3OTUwMDYwNl5BMl5BanBnXkFtZTcwNTUyNzc3Nw@@._V1_UY317_CR23,0,214,317_AL_.jpg"}},
     {name:"Tobey Maguire",age:"18",picture:{link:"https://www.imdb.com/name/nm0001497/",src:"https://m.media-amazon.com/images/M/MV5BMTYwMTI5NTM2OF5BMl5BanBnXkFtZTcwODk3MDQ2Mg@@._V1_.jpg"}},
     {name:"Daniel Radcliffe",age:"40",picture:{link:"https://www.imdb.com/name/nm0001497/",src:"https://m.media-amazon.com/images/M/MV5BMTYwMTI5NTM2OF5BMl5BanBnXkFtZTcwODk3MDQ2Mg@@._V1_.jpg"}},
     {name:"Tobey Maguire",age:"22",picture:{link:"https://www.imdb.com/name/nm0001497/",src:"https://m.media-amazon.com/images/M/MV5BMTYwMTI5NTM2OF5BMl5BanBnXkFtZTcwODk3MDQ2Mg@@._V1_.jpg"}},
     {name:"Hugh Jackman",age:"30",picture:{link:"https://www.imdb.com/name/nm0001497/",src:"https://m.media-amazon.com/images/M/MV5BMTYwMTI5NTM2OF5BMl5BanBnXkFtZTcwODk3MDQ2Mg@@._V1_.jpg"}},

   ]
  }
}
