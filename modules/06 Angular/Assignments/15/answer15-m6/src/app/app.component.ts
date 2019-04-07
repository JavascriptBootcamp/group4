import { Component } from '@angular/core';


interface Img {
  src:string,
  like:number
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'answer15-m6';

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
}
