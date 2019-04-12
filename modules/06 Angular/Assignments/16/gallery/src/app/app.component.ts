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
    this.index = 0;
    this.currentImg = "..\\assets\\img\\loading.png";
  }
  ngOnInit() {
    this.onInit();
  }


  onInit() {
    fetch("https://picsum.photos/list").then(
      (stream) => {
        stream.json().then(
          (json) => {
            for (let key in json) {
              this.images.push(new Img("https://picsum.photos/200/300?image=" + json[key].id,key));
              if (this.images.length === 40) {
                this.currentImg = this.images[this.index].img;
                break;
              }

            }
            // if (localStorage.getItem("lastImg") !== null) {
            //     document.getElementById("centerImg").src = localStorage.getItem("lastImg");
            // }
            // else
            //     document.getElementById("centerImg").src = images[this.index];
          }

        )
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
  }

  showImgFromThumb(idImg:number){
    this.currentImg = this.images[idImg].img;
  }
}

