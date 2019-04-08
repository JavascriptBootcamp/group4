import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { thumbnail } from '../app.component';
@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.css']
})
export class PictureComponent implements OnInit {
  @Input() bigPicture: thumbnail;
  @Output() addBackEvent = new EventEmitter<string>();
  @Output() addforwardEvent = new EventEmitter<string>();
  pictureNumber: number;
  constructor() {
   
  }

  ngOnInit() {
  }

  backwardImg() {
    if (this.bigPicture.id === "tm1") {
      this.bigPicture.id = "tm9";
    }
    else {
      this.pictureNumber = parseInt(this.bigPicture.id.substring(2, this.bigPicture.id.length)) - 1;
      this.bigPicture.id = String("tm" + this.pictureNumber);
    }
    this.addBackEvent.emit(this.bigPicture.id);
  }
  forwardImg() {
    if (this.bigPicture.id === "tm9") {
      this.bigPicture.id = "tm1";
    }
    else {
      this.pictureNumber = parseInt(this.bigPicture.id.substring(2, this.bigPicture.id.length)) + 1;
      this.bigPicture.id = String("tm" + this.pictureNumber);
    }
    this.addforwardEvent.emit(this.bigPicture.id);
  }
}
