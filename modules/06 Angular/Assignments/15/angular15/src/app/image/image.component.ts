import { Component, OnInit ,Input , Output ,EventEmitter} from '@angular/core';
import {Img} from '../app.component';


@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  @Input() img : Img;
  @Output() addToOpenModal = new EventEmitter();
  @Output() addToLocal = new EventEmitter<string>();
  isClicked : boolean;
  constructor() { 
    this.isClicked = false;
  }
  incrementLike(img : Img) {
    img.like++;
    this.addToLocal.emit();
  }
  isActive(){
    this.isClicked = true;
  }
  ngOnInit() {
  }
  openModal(){
    this.addToOpenModal.emit(this.img.src);
  }

}
