import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
@Input() imgSrc: string;
@Input() imgSrcIndex: number;
@Output() showBigPictureEvent = new EventEmitter<number>();
@Input() classNameType:string;
  constructor() { }

  ngOnInit() {
    
  }

  showBigPicture(){
    this.showBigPictureEvent.emit(this.imgSrcIndex);
  }

}
