import { Component, Input,Output, OnInit } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.css']
})
export class PictureComponent implements OnInit{
@Input() image: string;
@Output() showPictureEvent = new EventEmitter<string>();

counter: number;

incCounter(): void{
  this.counter++;
  localStorage.setItem(this.image,this.counter.toString());
}
  constructor() { 
    this.counter = 0;
    console.log(this.image);
  }

showPicture(){
  this.showPictureEvent.emit(this.image);
}

ngOnInit(){
  this.counter = Number(localStorage.getItem(this.image));
}


}
