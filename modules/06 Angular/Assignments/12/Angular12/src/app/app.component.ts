import { Component } from '@angular/core';
import {img} from './pic.model'
import { actor } from './actor.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  images: img[];
  actors: actor[];
  constructor(){
    this.images = [
      {
        href: "https://en.wikipedia.org/wiki/Amsterdam",
        src: "https://upload.wikimedia.org/wikipedia/commons/b/be/KeizersgrachtReguliersgrachtAmsterdam.jpg"
      },
      {
        href: "https://en.wikipedia.org/wiki/Moon",
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/FullMoon2010.jpg/631px-FullMoon2010.jpg"
      },
      {
        href: "https://en.wikipedia.org/wiki/Tel_Aviv",
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Tel_Aviv_Promenade_panoramics.jpg/800px-Tel_Aviv_Promenade_panoramics.jpg"
      },
      {
        href: "https://en.wikipedia.org/wiki/Holon",
        src: "https://www.prague.eu/img/pragueeu/u/property/logo-for-share-v2.jpg"
      },
      {
        href: "https://en.wikipedia.org/wiki/Prague",
        src: "https://www.israel21c.org/wp-content/uploads/2016/06/Photo-of-Beersheva-by-Leonard-ZhukovskyShutterstock.com_-1000x657.jpg"
      },
      {
        href: "https://en.wikipedia.org/wiki/Amsterdam",
        src: "https://upload.wikimedia.org/wikipedia/commons/b/be/KeizersgrachtReguliersgrachtAmsterdam.jpg"
      },
      {
        href: "https://en.wikipedia.org/wiki/Amsterdam",
        src: "https://upload.wikimedia.org/wikipedia/commons/b/be/KeizersgrachtReguliersgrachtAmsterdam.jpg"
      },
    ]
    
    this.actors = [
      {
        href: "https://www.imdb.com/name/nm0001497/",
        age: "38",
        src: "https://m.media-amazon.com/images/M/MV5BMTYwMTI5NTM2OF5BMl5BanBnXkFtZTcwODk3MDQ2Mg@@._V1_.jpg"
      },
      {
        href: "https://www.imdb.com/name/nm0000098/",
        age: "50",
        src: "https://m.media-amazon.com/images/M/MV5BNjk1MjIxNjUxNF5BMl5BanBnXkFtZTcwODk2NzM4Mg@@._V1_.jpg"
      },
      {
        href: "https://www.imdb.com/name/nm0413168/",
        age: "40",
        src: "https://m.media-amazon.com/images/M/MV5BNDExMzIzNjk3Nl5BMl5BanBnXkFtZTcwOTE4NDU5OA@@._V1_UX214_CR0,0,214,317_AL_.jpg"
      },
      {
        href: "https://www.imdb.com/name/nm0705356/",
        age: "29",
        src: "https://m.media-amazon.com/images/M/MV5BMTg4NTExODc3Nl5BMl5BanBnXkFtZTgwODUyMDEzMDE@._V1_UY317_CR11,0,214,317_AL_.jpg"
      },
    ]
  }
}
