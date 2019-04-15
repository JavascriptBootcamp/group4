import { Component, OnInit, Input, Output ,EventEmitter} from '@angular/core';
import { images } from '../imgArray';
import { Img } from '../imgArray';

@Component({
  selector: 'app-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.css']
})
export class ThumbnailComponent implements OnInit {
  intervalScroll: any;
  images: Img[];
  @Input() selected:number;
  @Output() showImg = new EventEmitter<number>();
  

  constructor() {
    this.images = images;
  }

  ngOnInit() {
  }

  upImgToMain(idImg:number){
    this.showImg.emit(idImg);
    this.selected = idImg;
    console.log(idImg);
  }

  scrlThumbnailRight(e: HTMLInputElement) {
    this.intervalScroll = setInterval(function () {
      e.scrollLeft += 1;
    }), 1000;
  }

  scrlThumbnailLeft(e: HTMLInputElement) {
    this.intervalScroll = setInterval(function () {
      e.scrollLeft -= 1;
    }), 1000;
  }

  stopScroll() {
    clearInterval(this.intervalScroll);
  }
}
