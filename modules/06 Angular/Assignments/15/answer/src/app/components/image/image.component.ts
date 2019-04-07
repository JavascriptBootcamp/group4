import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  @Input() src: string;
  @Output() showImgEvent = new EventEmitter<string>();
  likeCount: number;

  constructor() {
    this.likeCount = 0;
  }

  ngOnInit() {
  }

  addLike() {
    this.likeCount++;
  }

  showImg() {
    this.showImgEvent.emit(this.src);
  }

}
