import { Component, Input,Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Picture} from '../models/Picture';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.css']
})
export class PictureComponent{
@Input() picture: Picture;
@Output() showPictureEvent = new EventEmitter<Picture>();
isImageClicked: boolean;
fontSize: string;

counter: number;

incCounter(): void{
  this.picture.likeCounter++;
  if(this.picture.likeCounter > 10){
    this.fontSize = 'big';
  }
  else{
    this.fontSize = 'normal';
  }
}
  constructor() { 
    this.isImageClicked = false;
    this.fontSize = 'small';
  }

showPicture(){
  this.isImageClicked = true;
  this.showPictureEvent.emit(this.picture);
}


}
