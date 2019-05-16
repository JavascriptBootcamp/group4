import { Injectable } from "@angular/core";
export interface Img {
  src: string;
  like: number;
}
export interface UserImages {
  name: string;
  images: Img[];
}
@Injectable({
  providedIn: "root"
})
export class UserImagesService {
  imagesUsers: UserImages[];
  imagesUser: UserImages;
  images: string[];

  constructor() {
    this.intialzieImages();

    this.imagesUsers = [
      {
        name: "avi",
        images: [{ src: this.images[0], like: 0 },
                 { src: this.images[1], like: 0 },
                 { src: this.images[2], like: 0 },
                 { src: this.images[9], like: 0 }]
      },
      {
        name: "david",
        images: [{ src: this.images[3], like: 0 },
        { src: this.images[4], like: 0 },
        { src: this.images[5], like: 0 }]
      },
      {
        name: "moshe",
        images: [{ src: this.images[6], like: 0 },
                 { src: this.images[7], like: 0 },
                 { src: this.images[8], like: 0 }]
      }
    ];
  }

  intialzieImages(){
    this.images = [
      "https://cdn.dribbble.com/users/1463678/screenshots/3264921/full-stack-dribbble.png",
      "https://pbs.twimg.com/media/Cxneo79VEAA-utS.jpg",
      "https://i.redd.it/3dora5z6mae11.jpg",
      "http://www.inquisitiveone.in/wp-content/uploads/2017/02/HTML-vs-HTML-and-CSS.jpg",
      "https://comic.browserling.com/baby.png",
      "https://img.devrant.com/devrant/rant/r_403948_ikGUk.jpg",
      "https://pics.me.me/bootstrap-html-css-31715884.png",
      "https://www1.picturepush.com/photo/a/15883688/1024/CSS-Puns-and-CSS-,Jokes/Big-Bang---Web-Joke.png",
      "https://pbs.twimg.com/media/DVJmllgVQAE9nU6.jpg",
      "https://i.pinimg.com/736x/ca/47/94/ca4794cfada458717c7aa99093a1f425.jpg",

    ]
  }

}
