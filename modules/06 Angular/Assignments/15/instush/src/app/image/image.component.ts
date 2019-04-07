import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Image } from '../image.model'
@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {


  @Input() image: Image
  @Output() showImage = new EventEmitter<Image>();
  constructor() {
   
  }


  LikeClicked() {
    this.image.likeCount++;
    ; localStorage.setItem('img' + this.image.id, '' + this.image.likeCount)
  }

  ngOnInit() {
    if (localStorage.getItem('img' + this.image.id)) {
      this.image.likeCount = +(localStorage.getItem('img' + this.image.id));
    }
  }


  getImageClass(): string {
    let className = "img";
    if (this.image) {
      if (this.image.likeCount <= 10 && this.image.likeCount > 0) {

        className = "smallImg";
      }
      else if (this.image.likeCount > 10) {
        className = "bigImg";
      }
    }
    return className;
  }

  OnImageClicked() {
    this.showImage.emit(this.image);
  }


}
