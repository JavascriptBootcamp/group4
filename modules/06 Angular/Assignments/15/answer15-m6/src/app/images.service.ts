import { Injectable } from "@angular/core";
import { EventEmitter } from '@angular/core';

export interface Img {
  src: string;
  like: number;
  auther: string;
}

@Injectable({
  providedIn: "root"
})
export class ImagesService {
  images: Img[] = [];
  imageLikes: number[] = [];
  bigImg: string ="";
  zoom = false;
  imageToZoom =  new EventEmitter();
  hideImg = new EventEmitter()

  constructor() {

    this.images = [
      {
        src:
          "https://cdn.dribbble.com/users/1463678/screenshots/3264921/full-stack-dribbble.png",
        like: 0,
        auther: "auther1"
      },
      {
        src: "http://www.systemcomic.com/comics/2014-06-11-advancedanatomy.png",
        like: 0,
        auther: "auther2"
      },
      {
        src: "https://pbs.twimg.com/media/Cxneo79VEAA-utS.jpg",
        like: 0,
        auther: "auther2"
      },
      {
        src: "https://i.redd.it/3dora5z6mae11.jpg",
        like: 0,
        auther: "auther2,"
      },
      {
        src:
          "http://www.inquisitiveone.in/wp-content/uploads/2017/02/HTML-vs-HTML-and-CSS.jpg",
        like: 0,
        auther: "auther2"
      },
      {
        src: "https://img.devrant.com/devrant/rant/r_403948_ikGUk.jpg",
        like: 0,
        auther: "auther2"
      },
      {
        src: "https://pics.me.me/bootstrap-html-css-31715884.png",
        like: 0,
        auther: "auther2"
      },
      {
        src:
          "https://www1.picturepush.com/photo/a/15883688/1024/CSS-Puns-and-CSS-,Jokes/Big-Bang---Web-Joke.png",
        like: 0,
        auther: "auther2"
      },
      {
        src: "https://pbs.twimg.com/media/DVJmllgVQAE9nU6.jpg",
        like: 0,
        auther: "auther2"
      },
      {
        src:
          "https://i.pinimg.com/736x/ca/47/94/ca4794cfada458717c7aa99093a1f425.jpg",
        like: 0,
        auther: "auther2"
      }
    ];


  }

  intialiazeLike() {
    if (localStorage.getItem("imageLikes") === null) {
      this.images.forEach(value => {
        this.imageLikes.push(value.like);
      });
    } else {
      this.imageLikes = JSON.parse(localStorage.getItem("imageLikes"));
      this.images.forEach((value, index) => {
        value.like = this.imageLikes[index];
      });
    }
  }
}
