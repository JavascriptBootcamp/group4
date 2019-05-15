import { Injectable } from "@angular/core";
import { EventEmitter } from '@angular/core';
import { UserImagesService } from './user-images.service';

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

  constructor(private userImagesService : UserImagesService) {

    this.images = [
      {
        auther: this.userImagesService.imagesUsers[0].name,
        src:this.userImagesService.imagesUsers[0].images[0].src,
        like: this.userImagesService.imagesUsers[0].images[0].like

      },
      {
        auther: this.userImagesService.imagesUsers[0].name,
        src:this.userImagesService.imagesUsers[0].images[1].src,
        like: this.userImagesService.imagesUsers[0].images[1].like

      },
      {
        auther: this.userImagesService.imagesUsers[0].name,
        src:this.userImagesService.imagesUsers[0].images[2].src,
        like: this.userImagesService.imagesUsers[0].images[2].like

      },
      {
        auther: this.userImagesService.imagesUsers[0].name,
        src:this.userImagesService.imagesUsers[0].images[3].src,
        like: this.userImagesService.imagesUsers[0].images[3].like

      },
      {
        auther: this.userImagesService.imagesUsers[1].name,
        src:this.userImagesService.imagesUsers[1].images[0].src,
        like: this.userImagesService.imagesUsers[1].images[0].like

      },
      {
        auther: this.userImagesService.imagesUsers[1].name,
        src:this.userImagesService.imagesUsers[1].images[1].src,
        like: this.userImagesService.imagesUsers[1].images[1].like

      },
      {
        auther: this.userImagesService.imagesUsers[1].name,
        src:this.userImagesService.imagesUsers[1].images[2].src,
        like: this.userImagesService.imagesUsers[1].images[2].like

      },
      {
        auther: this.userImagesService.imagesUsers[2].name,
        src:this.userImagesService.imagesUsers[2].images[0].src,
        like: this.userImagesService.imagesUsers[2].images[0].like

      },
      {
        auther: this.userImagesService.imagesUsers[2].name,
        src:this.userImagesService.imagesUsers[2].images[1].src,
        like: this.userImagesService.imagesUsers[2].images[1].like

      },
      {
        auther: this.userImagesService.imagesUsers[2].name,
        src:this.userImagesService.imagesUsers[2].images[2].src,
        like: this.userImagesService.imagesUsers[2].images[2].like

      },
    ];


  }

  intialiazeLike() {
    if (localStorage.getItem("imageLikes") === null) {

      this.images.forEach(value => {
        this.imageLikes.push(value.like);
      });
    } else {
      this.imageLikes = JSON.parse(localStorage.getItem("imageLikes"));
      this.images.forEach((value, index ,arr) => {
        console.log(this.imageLikes[index]);
        arr[index].like = this.imageLikes[index];
      });
    }
  }
}
