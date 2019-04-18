import { Component, OnInit } from '@angular/core';

export class Img {
  like: number;
  src: string;
  author : string;
}
@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {

  image: string;
  images: Img[] = [];
  clicked: boolean;
  hidden: boolean;
  constructor() {
    this.image = "";
    this.clicked = false;
    this.hidden = false;
    this.images = JSON.parse(localStorage.getItem("ins"));
  }
  hideModal() {
    this.clicked = false;
    this.hidden = true;
  }
  onAddToOpenModal(img: string) {
    this.image = img;
    this.clicked = true;
    this.hidden = false;
  }
  ngOnInit() {
    if (this.images === null) {
      this.images = [
        { src: "assets/images/pic1.jpg", like: 0 , author : 'gaby'},
        { src: "assets/images/pic2.jpg", like: 0 , author : 'yosi'},
        { src: "assets/images/pic3.jpg", like: 0 , author : 'daniel'},
        { src: "assets/images/pic4.jpg", like: 0 , author : 'maly'},
        { src: "assets/images/pic5.jpg", like: 0 , author : 'zuri'},
        { src: "assets/images/pic6.jpg", like: 0 , author : 'dalya'},
        { src: "assets/images/pic7.jpg", like: 0 , author : 'nissan'},
        { src: "assets/images/pic8.jpg", like: 0 , author : 'revital'},
        { src: "assets/images/pic9.jpg", like: 0 , author : 'tal'},
        { src: "assets/images/pic10.jpg", like: 0 , author : 'assaf'}
      ];
    }
  }
  addToLocal(){
    localStorage.setItem("ins",JSON.stringify(this.images));
  }

}
