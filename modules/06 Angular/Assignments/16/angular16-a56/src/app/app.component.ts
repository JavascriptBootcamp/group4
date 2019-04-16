import { Component, OnInit } from '@angular/core';
import { images } from './images';
import { Image } from './image.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  images: Image[];
  localMainImg: number;
  mainImg: number;

  constructor() {
    this.images = images;
    this.localMainImg = JSON.parse(localStorage.getItem("selectedImg"));
    //this.images.push(new Image("https://thumbs.gfycat.com/UnitedSmartBinturong-max-1mb.gif", 0));
  }
  ngOnInit() {
    this.loadImages()
  }
  loadImages() {
    fetch("https://picsum.photos/list")
      .then(response => response.json())
      .then((json) => {
        // this.createThumbnails(json);
        // this.updateMainImg();
        for (let i = 0; i < 10; i++) {
          this.images.push(new Image("https://picsum.photos/200/150?image=" + json[i].id, i));
        }
        if (this.localMainImg)
          this.mainImg = this.localMainImg;
        else
          this.mainImg = 0;
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  // private createThumbnails(data): void {
  //   for (let i: number = 0; i < 10; i++) {
  //     this.images.push(new Image(`https://picsum.photos/200/150?image=${data[i]["id"]}`, i));
  //   }
  // }

  // private updateMainImg(): void {
  //   if (this.localMainImg)
  //     this.setMainImg(this.localMainImg);
  //   else
  //     this.setMainImg(0);
  // }

  // setMainImg(imgId) {
  //   console.log(imgId);
  //   this.mainImg = imgId;
  // }
}
