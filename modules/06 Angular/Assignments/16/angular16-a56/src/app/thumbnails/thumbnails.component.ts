import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Image } from '../image.model';
import { images } from "../images";

@Component({
  selector: 'app-thumbnails',
  templateUrl: './thumbnails.component.html',
  styleUrls: ['./thumbnails.component.css']
})
export class ThumbnailsComponent implements OnInit {
  // @Input() images: Image[];
  @Input() selected: number;
  @Output() mainImgId = new EventEmitter<number>();
  scroll: number;
  images: Image[];

  constructor() {
    this.images = images;
    console.log(images[0]);//undefined

  }
  ngOnInit(): void {

  }

  forShowMainImg(imgElement) {
    //imgElement.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
    this.selected = Number(imgElement.id);
    this.mainImgId.emit(this.selected);
  }
  scrollToRight(thumbnails: HTMLDivElement) {
    this.scroll = window.setInterval(() => {
      thumbnails.scrollLeft += 4;
    }, 10);
  }
  scrollToLeft(thumbnails: HTMLDivElement) {
    this.scroll = window.setInterval(() => {
      thumbnails.scrollLeft -= 4;
    }, 10);
  }
  stopScroll() {
    clearInterval(this.scroll);
  }
}
