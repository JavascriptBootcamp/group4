import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Img } from "../../modules/img";
import {ImagesService} from '../../images.service'


@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  @Input() img: Img;
  @Output() showImgEvent = new EventEmitter<string>();
  @Output() incressLikeEvent = new EventEmitter();

  constructor(private imgService:ImagesService) {
  }

  ngOnInit() {
  }

  addLike() {
    this.img.likes++;
    this.incressLikeEvent.emit();
    this.imgService.saveLocalS();
  }

  showImg() {
    this.showImgEvent.emit(this.img.src);
  }


}
