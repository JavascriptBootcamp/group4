import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Image } from '../image.model';
import { images } from '../images';

@Component({
  selector: 'app-main-picture',
  templateUrl: './main-picture.component.html',
  styleUrls: ['./main-picture.component.css']
})
export class MainPictureComponent implements OnInit {
  // @Input() images: Image[];
  @Input() mainImgId: number;
  @Output() changeId = new EventEmitter<number>();
  images: Image[];
  src: string;

  constructor() {
    this.images = images;
    this.src = "https://thumbs.gfycat.com/UnitedSmartBinturong-max-1mb.gif";
    // this.src = images[this.mainImgId].src;
  }

  ngOnInit() {
    console.log(this.images[0]);//undefined
  }
  moveLeft() {
    console.log(this.mainImgId);
    this.mainImgId = this.mainImgId === 0 ? (this.images.length - 1) : (this.mainImgId - 1);
    this.changeMainImgId();
  }
  moveRight() {
    console.log(this.mainImgId);
    this.mainImgId = this.mainImgId === this.images.length ? 0 : (this.mainImgId + 1);
    this.changeMainImgId();
  }
  changeMainImgId() {
    this.changeId.emit(this.mainImgId);
  }

}
