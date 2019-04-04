import { Component, OnInit, Input } from '@angular/core';
import { Image } from '../image.model'
@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {


  @Input() image: Image

  constructor() { }


  LikeClicked() {
    this.image.likeCount++;
  }

  ngOnInit() {
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


}
