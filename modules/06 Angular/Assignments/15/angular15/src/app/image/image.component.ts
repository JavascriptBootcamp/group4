import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Img } from '../images/images.component';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

interface iAuthor {
  name: string;
  id: number;
  profilePic: string;
  facebook: string;
  desc: string;
}

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  @Input() img: Img;
  @Output() addToOpenModal = new EventEmitter();
  @Output() addToLocal = new EventEmitter<string>();
  isClicked: boolean;
  images: Img[];
  firstPage: boolean;
  author: iAuthor;
  authorImages: string[];
  constructor(private route: ActivatedRoute, private location: Location) {
    this.route = route;
    this.isClicked = false;
    this.images = [
      { src: "assets/images/pic1.jpg", like: 0, author: { name: 'gaby', id: 111, profilePic: "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/10_avatar-512.png", facebook: "https://www.facebook.com/gaby.buchnik", desc: "text 1" } },
      { src: "assets/images/pic2.jpg", like: 0, author: { name: 'yosi', id: 112, profilePic: "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/10_avatar-512.png", facebook: "https://www.facebook.com/gaby.buchnik", desc: "text 2" } },
      { src: "assets/images/pic3.jpg", like: 0, author: { name: 'maly', id: 113, profilePic: "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/10_avatar-512.png", facebook: "https://www.facebook.com/gaby.buchnik", desc: "text 3" } },
      { src: "assets/images/pic4.jpg", like: 0, author: { name: 'dalya', id: 114, profilePic: "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/10_avatar-512.png", facebook: "https://www.facebook.com/gaby.buchnik", desc: "text 4" } },
      { src: "assets/images/pic5.jpg", like: 0, author: { name: 'gaby', id: 111, profilePic: "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/10_avatar-512.png", facebook: "https://www.facebook.com/gaby.buchnik", desc: "text 5" } },
      { src: "assets/images/pic6.jpg", like: 0, author: { name: 'gaby', id: 111, profilePic: "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/10_avatar-512.png", facebook: "https://www.facebook.com/gaby.buchnik", desc: "text 6" } },
      { src: "assets/images/pic7.jpg", like: 0, author: { name: 'maly', id: 113, profilePic: "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/10_avatar-512.png", facebook: "https://www.facebook.com/gaby.buchnik", desc: "text 7" } },
      { src: "assets/images/pic8.jpg", like: 0, author: { name: 'zuri', id: 115, profilePic: "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/10_avatar-512.png", facebook: "https://www.facebook.com/gaby.buchnik", desc: "text 8" } },
      { src: "assets/images/pic9.jpg", like: 0, author: { name: 'yosi', id: 112, profilePic: "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/10_avatar-512.png", facebook: "https://www.facebook.com/gaby.buchnik", desc: "text 9" } },
      { src: "assets/images/pic10.jpg", like: 0, author: { name: 'revital', id: 116, profilePic: "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/10_avatar-512.png", facebook: "https://www.facebook.com/gaby.buchnik", desc: "text 10" } }
    ];
    this.authorImages = [];
    this.firstPage = true;
    this.author = null;
  }
  incrementLike(img: Img) {
    img.like++;
    this.addToLocal.emit();
  }
  isActive() {
    this.isClicked = true;
  }
  ngOnInit() {
    if (!this.img) {
      this.setImage(this.route.snapshot.params.id);
    }
  }
  openModal() {
    this.addToOpenModal.emit(this.img.src);
  }
  setImage(authorId: number) {
    this.authorImages = [];
    this.firstPage = false;
    for (let image of this.images) {
      if (Number(authorId) === image.author.id) {
        this.authorImages.push(image.src);
        this.author = {
          name: image.author.name,
          id: image.author.id,
          profilePic: image.author.profilePic,
          facebook: image.author.facebook,
          desc: image.author.desc
        }
      }
    }
  }
  goBack(): void {
    this.location.back();
  }
}
