import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
<<<<<<< HEAD
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'q15';

  imgSrc: string[];
  bigImgSrc: string;

  constructor(){
    this.imgSrc= ["assets/images/pic1.jpg", "assets/images/pic2.jpg", "assets/images/pic3.jpg",
    "assets/images/pic4.jpg", "assets/images/pic5.jpg", "assets/images/pic6.jpg", "assets/images/pic7.jpg",
    "assets/images/pic8.jpg", "assets/images/pic9.jpg", "assets/images/pic10.jpg", "assets/images/pic11.jpg", "assets/images/pic12.jpg"];
    this.bigImgSrc = '';
  }

  onImgClilcked(bigImgSrc: string){
   this.bigImgSrc = bigImgSrc;
  }
=======
  styleUrls: ['./app.component.css']})
>>>>>>> b4e22d7284b171342d61ad89e8a94ae4805e8570

export class AppComponent {
}
