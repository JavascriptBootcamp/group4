import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  @Input() src: string;
  @Input() imageId: number;
  @Output() imgPressedEvent = new EventEmitter<string>();
  counter: number;
  isClicked: boolean;
  counterId: string;
  imageHeight: string;
  imageWidth: string;
  constructor() {
    this.counter = 0;
    this.isClicked = false;
  }

  openImage() {
    this.imgPressedEvent.emit(this.src);
    this.isClicked = true;
  }
  addLike() {
    this.counter++;
    let localStorageValue = this.counter + "";
    window.localStorage.setItem(this.counterId, localStorageValue);
    if (this.counter === 0) {
      this.imageHeight = "140";
      this.imageWidth = "160";
    }
    if (this.counter > 10) {
      this.imageHeight = "160";
      this.imageWidth = "220";
    }
    else if(this.counter>0 && this.counter<=10){
      this.imageHeight = "150";
      this.imageWidth = "180";
    }
  }
  ngOnInit() {
    this.counterId = "counter" + this.imageId;
    if (window.localStorage.getItem(this.counterId)) {
      this.counter = + window.localStorage.getItem(this.counterId);
    }
    if (this.counter === 0) {
      this.imageHeight = "140";
      this.imageWidth = "160";
    }
    if (this.counter > 10) {
      this.imageHeight = "160";
      this.imageWidth = "220";
    }
    else if(this.counter>0 && this.counter<=10){
      this.imageHeight = "150";
      this.imageWidth = "180";
    }

  }

}
