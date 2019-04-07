import { Component, OnInit } from '@angular/core';

interface Img {
  src:string,
  like:number
}
@Component({
  selector: 'app-image-comp',
  templateUrl: './image-comp.component.html',
  styleUrls: ['./image-comp.component.css']
})
export class ImageCompComponent implements OnInit {

 
  images:Img[]  = [{src:"https://content.linkedin.com/content/dam/me/learning/blog/2016/september/CSS.jpg",like:0},
                   {src:"https://content.linkedin.com/content/dam/me/learning/blog/2016/september/CSS.jpg",like:0},
                   {src:"https://content.linkedin.com/content/dam/me/learning/blog/2016/september/CSS.jpg",like:0},
                   {src:"https://content.linkedin.com/content/dam/me/learning/blog/2016/september/CSS.jpg",like:0},
                   {src:"https://content.linkedin.com/content/dam/me/learning/blog/2016/september/CSS.jpg",like:0},
                   {src:"https://content.linkedin.com/content/dam/me/learning/blog/2016/september/CSS.jpg",like:0},
                   {src:"https://content.linkedin.com/content/dam/me/learning/blog/2016/september/CSS.jpg",like:0},
                   {src:"https://content.linkedin.com/content/dam/me/learning/blog/2016/september/CSS.jpg",like:0},
                   {src:"https://content.linkedin.com/content/dam/me/learning/blog/2016/september/CSS.jpg",like:0},
                   {src:"https://content.linkedin.com/content/dam/me/learning/blog/2016/september/CSS.jpg",like:0}
                   ]
    
  constructor() { }

  ngOnInit() {

  }

  onClickLike(e, likeClick){
    likeClick.like++;
  }

}
