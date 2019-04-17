import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Img } from '../imgArray';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.css']
})
export class ImgComponent {
  @Input() selected: number;
  @Input() img: Img;
  @Output() imgClicked = new EventEmitter<number>();
  constructor() { }


  clickedImg(element) {
    element.target.scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
    this.imgClicked.emit(this.img.id);
  }
}
