import { Component} from '@angular/core';
import { Actor } from './actor.model';

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.css']
})


export class ActorComponent {
  actors: Actor[] = null;

  constructor() {
    this.actors = [
    { url: "https://www.imdb.com/name/nm0000216/",
      img:"https://images.fandango.com/ImageRenderer/0/0/redesign/static/img/default_poster.png/0/images/spotlight/everettcollection_arnoldschwarzenegger-170213.jpg",
      name:"Arnold Schwarzenegger",
      age: 72
    },
    { url: "https://www.imdb.com/name/nm0000138/",
      img:"https://img.buzzfeed.com/buzzfeed-static/static/enhanced/web04/2012/6/19/11/enhanced-buzz-28734-1340119709-4.jpg?downsize=700:*&output-format=auto&output-quality=auto",
      name:"Leonardo Dicaprio",
      age: 44  
    },
    { url: "https://www.imdb.com/name/nm0000255/",
      img:"https://images.tmz.com/2014/10/26/ben-affleck-200x250.jpg",
      name:"Ben Affleck",
      age: 46 
    },
    { url: "https://www.imdb.com/name/nm0000187/",
      img:"https://i.pinimg.com/originals/7f/be/42/7fbe42e2fa33f1fca1fc25c450ea1d41.jpg",
      name:"Madonna",
      age: 60  
    },
    { url: "https://www.imdb.com/name/nm0461498/",
      img:"https://max-media.imgix.net/transfers/2016/2/15/88cba168c68f24642d8df5b5361e6a9517e52499.gif",
      name:"Beyonce",
      age: 37
    }

  ];
 }
  

}