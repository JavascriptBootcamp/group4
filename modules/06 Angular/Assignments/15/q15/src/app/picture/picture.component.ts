import { Component, Input,Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.css']
})
export class PictureComponent{
@Input() image: string;
@Input() author: string;
@Output() showPictureEvent = new EventEmitter<string>();
isImageClicked: boolean;
fontSize: string;

counter: number;

incCounter(): void{
  this.counter++;
  if(this.counter > 10){
    this.fontSize = 'big';
  }
  else{
    this.fontSize = 'normal';
  }
}
  constructor() { 
    this.counter = 0;
    this.isImageClicked = false;
    this.fontSize = 'small';
  }

showPicture(){
  this.isImageClicked = true;
  this.showPictureEvent.emit(this.image);
}


}
