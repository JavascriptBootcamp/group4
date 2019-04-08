import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.css']
})
export class PictureComponent{
  @Input() picture:string;
  @Input() selected:boolean;
  @Output() showThisImage=new EventEmitter <string>();
  @Output() nextPictureEmit=new EventEmitter <any>();
  @Output() prevPictureEmit=new EventEmitter <any>();
  constructor() { 
  }
  clickedPicture(){
    this.showThisImage.emit(this.picture);
  }
  nextPicture(){
    this.nextPictureEmit.emit();
  }
  prevPicture(){
    this.prevPictureEmit.emit();
  }
}
