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


  images:Img[]  = [{src:"https://cdn.dribbble.com/users/1463678/screenshots/3264921/full-stack-dribbble.png",like:0},
  {src:"http://www.systemcomic.com/comics/2014-06-11-advancedanatomy.png",like:0},
  {src:"https://pbs.twimg.com/media/Cxneo79VEAA-utS.jpg",like:0},
  {src:"https://i.redd.it/3dora5z6mae11.jpg",like:0},
  {src:"http://www.inquisitiveone.in/wp-content/uploads/2017/02/HTML-vs-HTML-and-CSS.jpg",like:0},
  {src:"https://img.devrant.com/devrant/rant/r_403948_ikGUk.jpg",like:0},
  {src:"https://pics.me.me/bootstrap-html-css-31715884.png",like:0},
  {src:"https://www1.picturepush.com/photo/a/15883688/1024/CSS-Puns-and-CSS-Jokes/Big-Bang---Web-Joke.png",like:0},
  {src:"https://pbs.twimg.com/media/DVJmllgVQAE9nU6.jpg",like:0},
  {src:"https://i.pinimg.com/736x/ca/47/94/ca4794cfada458717c7aa99093a1f425.jpg",like:0}
  ]
}
