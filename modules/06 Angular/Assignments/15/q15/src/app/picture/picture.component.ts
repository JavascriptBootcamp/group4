import { Component, Input,Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.css']
})
export class PictureComponent{
@Input() image: string;
@Output() showPictureEvent = new EventEmitter<string>();

counter: number;

incCounter(): void{
  this.counter++;
}
  constructor() { 
    this.counter = 0;
  }

showPicture(){
  this.showPictureEvent.emit(this.image);
}


}
