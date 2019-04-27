import { Component, Input, Output, EventEmitter, AfterViewChecked } from '@angular/core';
import { Image } from '../image.model';
import { images } from '../images';

@Component({
  selector: 'app-thumbnails',
  templateUrl: './thumbnails.component.html',
  styleUrls: ['./thumbnails.component.css']
})
export class ThumbnailsComponent implements AfterViewChecked {
  @Input() images: Image[];
  @Input() selected: number;
  @Input() localMainImg: number;
  @Output() mainImgId = new EventEmitter<number>();
  scroll: number;

  constructor() { }

  forShowMainImg(imgIdClicked): void {
    this.selected = imgIdClicked;
    localStorage.setItem("selectedImg", JSON.stringify(this.selected));
    this.mainImgId.emit(this.selected);
  }
  scrollToRight(thumbnails: HTMLDivElement): void {
    this.scroll = window.setInterval(() => {
      thumbnails.scrollLeft += 4;
    }, 10);
  }
  scrollToLeft(thumbnails: HTMLDivElement): void {
    this.scroll = window.setInterval(() => {
      thumbnails.scrollLeft -= 4;
    }, 10);
  }
  stopScroll(): void {
    clearInterval(this.scroll);
  }
  ngAfterViewChecked(): void {
    if (images.length - 1 === this.localMainImg) {
      this.setImgCenter();
    }
  }
  setImgCenter(): void {
    images[this.localMainImg].scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
  }
}
