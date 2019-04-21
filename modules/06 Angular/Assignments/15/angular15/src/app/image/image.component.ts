import { Component, OnInit ,Input , Output ,EventEmitter} from '@angular/core';
import {Img} from '../images/images.component';
import { ActivatedRoute } from '@angular/router';

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
  images : Img[];
  constructor(private route : ActivatedRoute) { 
    this.route = route;
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
    if(!this.img){
      this.setImage(this.route.snapshot.params.author);
    }
  }
  openModal(){
    this.addToOpenModal.emit(this.img.src);
  }
  setImage(img : Img){
    console.log(img);
  }
}
