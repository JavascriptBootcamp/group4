import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Image } from '../image.model';
import { images } from "../images";
import { Iselected } from "../selected.model";

@Component({
  selector: 'app-main-picture',
  templateUrl: './main-picture.component.html',
  styleUrls: ['./main-picture.component.css']
})
export class MainPictureComponent implements Iselected {
  @Input() images: Image[];
  @Input() mainImgId: number;
  @Output() changeId = new EventEmitter<number>();

  constructor() { }

  moveLeft(): void {
    console.log(this.mainImgId);
    this.mainImgId = this.mainImgId === 0 ? (this.images.length - 1) : (this.mainImgId - 1);
    this.setImgCenter();
    this.changeMainImgId();
  }
  moveRight(): void {
    console.log(this.mainImgId);
    this.mainImgId = this.mainImgId === (this.images.length - 1) ? 0 : (this.mainImgId + 1);
    this.setImgCenter();
    this.changeMainImgId();
  }
  private changeMainImgId(): void {
    this.changeId.emit(this.mainImgId);
  }
  setImgCenter(): void {
    images[this.mainImgId].scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
  }

}
