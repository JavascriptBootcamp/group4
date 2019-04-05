import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Image } from '../image.model';
import { toLocalImgs } from '../localimgs';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.css']
})
export class ImgComponent implements OnInit {

  @Input() objImg: Image;
  @Input() imgIndex: number;
  @Output() imgSrc = new EventEmitter<string>();


  constructor() { }

  ngOnInit(): void {
    toLocalImgs.push(this.objImg);
  }

  addLike(id): void {
    this.objImg.addLike();
    localStorage.setItem("images", JSON.stringify(toLocalImgs));
  }
  imgSize(): string {
    if (this.objImg.likecount === 0) {
      return "imgsmall";
    }
    else if (this.objImg.likecount < 10 && this.objImg.likecount > 0) {
      return "imgnormal";
    }
    else {
      return "imgbig";
    }
  }
  imgClick() {
    this.imgSrc.emit(this.objImg.src);
  }



}
