import { Component, OnInit, Input } from '@angular/core';
import { Image } from '../image.model';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.css']
})
export class ImgComponent {
  @Input() imgs: Image;

  constructor() { }
  addLike(id): void {
    let index: number = id;
    this.imgs[index].addLike();
  }


}
