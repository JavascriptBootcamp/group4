import { Component, OnInit ,Input , Output ,EventEmitter} from '@angular/core';
import {Img} from '../images/images.component';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';


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
  firstPage : boolean;
  author : string;
  authorImages : string[];
  constructor(private route : ActivatedRoute , private location : Location) { 
    this.route = route;
    this.isClicked = false;
    this.images = [
      { src: "assets/images/pic1.jpg", like: 0 , author : 'gaby'},
      { src: "assets/images/pic2.jpg", like: 0 , author : 'yosi'},
      { src: "assets/images/pic3.jpg", like: 0 , author : 'daniel'},
      { src: "assets/images/pic4.jpg", like: 0 , author : 'maly'},
      { src: "assets/images/pic5.jpg", like: 0 , author : 'zuri'},
      { src: "assets/images/pic6.jpg", like: 0 , author : 'dalya'},
      { src: "assets/images/pic7.jpg", like: 0 , author : 'nissan'},
      { src: "assets/images/pic8.jpg", like: 0 , author : 'revital'},
      { src: "assets/images/pic9.jpg", like: 0 , author : 'gaby'},
      { src: "assets/images/pic10.jpg", like: 0 , author : 'gaby'}
    ];
    this.authorImages = [];
    this.firstPage = true;
    this.author = "";
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
      this.author = this.route.snapshot.params.author;
    }
  }
  openModal(){
    this.addToOpenModal.emit(this.img.src);
  }
  setImage(author : string){
    this.firstPage = false;
    for(let image of this.images){
      if(author === image.author)
      {
        this.authorImages.push(image.src);
      }
    }
  }
  goBack() : void{
    this.location.back();
  }
}
