import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  imgSrcArray: string[];
  image : string;
  clicked : boolean;
  constructor() {
    this.imgSrcArray = ["assets/images/pic1.jpg", "assets/images/pic2.jpg", "assets/images/pic3.jpg",
      "assets/images/pic4.jpg", "assets/images/pic5.jpg", "assets/images/pic6.jpg", "assets/images/pic7.jpg",
      "assets/images/pic8.jpg", "assets/images/pic9.jpg", "assets/images/pic10.jpg"];
      this.image = "";
      this.clicked = false;
  }
  onAddToOpenModal(img : string){
    this.image = img;
    this.clicked = true;
  }
  
}
