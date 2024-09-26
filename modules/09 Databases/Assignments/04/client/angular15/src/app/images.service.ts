import { Injectable } from '@angular/core';
import {Img} from './image.model';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {
  images : Img[];
  constructor() { 
    this.images = [
      { src: "assets/images/pic1.jpg", like: 0 , author : {name : 'gaby' , id : 111 , profilePic : "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/10_avatar-512.png", facebook : "https://www.facebook.com/gaby.buchnik" , desc : "text 1"}},
      { src: "assets/images/pic2.jpg", like: 0 , author : {name : 'yosi' , id : 112 , profilePic : "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/10_avatar-512.png", facebook : "https://www.facebook.com/gaby.buchnik" , desc : "text 2"}},
      { src: "assets/images/pic3.jpg", like: 0 , author : {name : 'maly' , id : 113 , profilePic : "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/10_avatar-512.png", facebook : "https://www.facebook.com/gaby.buchnik" , desc : "text 3"}},
      { src: "assets/images/pic4.jpg", like: 0 , author : {name : 'dalya' , id : 114 , profilePic : "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/10_avatar-512.png", facebook : "https://www.facebook.com/gaby.buchnik" , desc : "text 4"}},
      { src: "assets/images/pic5.jpg", like: 0 , author : {name : 'gaby' , id : 111 , profilePic : "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/10_avatar-512.png", facebook : "https://www.facebook.com/gaby.buchnik" , desc : "text 5"}},
      { src: "assets/images/pic6.jpg", like: 0 , author : {name : 'gaby' , id : 111 , profilePic : "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/10_avatar-512.png", facebook : "https://www.facebook.com/gaby.buchnik" , desc : "text 6"}},
      { src: "assets/images/pic7.jpg", like: 0 , author : {name : 'maly' , id : 113 , profilePic : "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/10_avatar-512.png", facebook : "https://www.facebook.com/gaby.buchnik" , desc : "text 7"}},
      { src: "assets/images/pic8.jpg", like: 0 , author : {name : 'zuri' , id : 115 , profilePic : "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/10_avatar-512.png", facebook : "https://www.facebook.com/gaby.buchnik" , desc : "text 8"}},
      { src: "assets/images/pic9.jpg", like: 0 , author : {name : 'yosi' , id : 112 , profilePic : "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/10_avatar-512.png", facebook : "https://www.facebook.com/gaby.buchnik" , desc : "text 9"}},
      { src: "assets/images/pic10.jpg", like: 0 , author : {name : 'revital' , id : 116 , profilePic : "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/10_avatar-512.png", facebook : "https://www.facebook.com/gaby.buchnik" , desc : "text 10"}}
    ];
  }
  getImages() : Img[]{
    return this.images;
  }
}
