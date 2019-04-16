import { Component, OnInit } from '@angular/core';
import { Image } from './image.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  images: Image[] = [];
  localMainImg: number;
  mainImg: number;

  constructor() {
    this.localMainImg = JSON.parse(localStorage.getItem("selectedImg"));
  }
  ngOnInit() {
    this.loadImages()
  }
  private loadImages() {
    fetch("https://picsum.photos/list")
      .then(response => response.json())
      .then((json) => {
        this.createThumbnails(json);
        this.updateMainImg();
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  private createThumbnails(data): void {
    for (let i: number = 0; i < 30; i++) {
      this.images.push(new Image(`https://picsum.photos/200/150?image=${data[i]["id"]}`, i));
    }
  }

  private updateMainImg(): void {
    if (this.localMainImg)
      this.setMainImg(this.localMainImg);
    else
      this.setMainImg(0);
  }

  setMainImg(imgId) {
    this.mainImg = imgId;
  }
}
