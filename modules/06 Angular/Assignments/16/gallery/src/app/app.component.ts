import { Component, OnInit, Input } from '@angular/core';
import { images } from './imgArray';
import { Img } from './imgArray';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'My Gallery';
  currentImg: string;
  index: number;
  images: Img[];

  constructor() {
    this.images = images;

    this.currentImg = "..\\assets\\img\\loading-1.png";
  }

  ngOnInit() {
    this.onInit();
    if (localStorage.getItem("lastImg") !== null)
      this.index = Number(localStorage.getItem("lastImg"));
    else
      this.index = 0;
  }


  onInit() {
    fetch("https://picsum.photos/list").then(
      (stream) => {
        stream.json().then(
          (json) => {
            for (let key in json) {
              this.images.push(new Img("https://picsum.photos/200/300?image=" + json[key].id, key));
              if (this.images.length === 40) {
                this.currentImg = this.images[this.index].img;
                break;
              }
            }
          })
      }
    ).catch(function (error) {
      console.log("error" + error);
    })
  }

  replaceImage(sign: number) {
    switch (sign) {
      case (1):
        {
          if (this.index == (this.images.length - 1)) {
            this.index = 0;
          }
          else
            this.index++;
          break;
        }
      case (-1):
        {
          if (this.index == 0) {
            this.index = this.images.length - 1;
          }
          else
            this.index--;
          break;
        }
    }
    this.currentImg = this.images[this.index].img;
    this.updateLocalS();
  }

  showImgFromThumb(idImg: number) {
    this.currentImg = this.images[idImg].img;
    this.index = idImg;
    this.updateLocalS();
  }

  updateLocalS(){
    localStorage.setItem("lastImg",this.index.toString());
  }
}

