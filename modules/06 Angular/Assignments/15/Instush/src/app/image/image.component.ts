import { Component, Input, OnInit } from '@angular/core';
import { Img } from '../app.component';
@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  @Input() img: Img;

  constructor() { }

  clickLike(img: Img) {
    img.like++;
  }


  public test() {
    if ((this.img.like > 0) && (this.img.like < 10))
      return "medium";
    else if (this.img.like >= 10)
    return "large";
      else return "small";

  }


  ngOnInit() {
  }

}
