import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
@Input() imgSrc: string;
@Output() showBigPictureEvent = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  showBigPicture(){
    this.showBigPictureEvent.emit(this.imgSrc);
  }

}
