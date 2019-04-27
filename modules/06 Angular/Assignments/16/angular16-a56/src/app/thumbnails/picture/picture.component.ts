import { Component, EventEmitter, Output, Input } from '@angular/core';
import { Image } from 'src/app/image.model';
import { images } from "src/app/images";

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.css']
})
export class PictureComponent {
  @Input() img: Image;
  @Input() selected: number;
  @Output() imgClicked = new EventEmitter<number>();
  imgElement: HTMLImageElement;

  constructor() { }

  load(imgEle): void {
    images.push(imgEle);
    this.imgElement = imgEle;
  }
  clickedImg(): void {
    this.setImgCenter();
    this.imgClicked.emit(Number(this.imgElement.id));
  }
  setImgCenter(): void {
    this.imgElement.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
  }
}
