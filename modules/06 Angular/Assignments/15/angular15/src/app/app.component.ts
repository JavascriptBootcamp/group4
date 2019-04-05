import { Component } from '@angular/core';
import { Image } from './image.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular15';
  images: Image[] = [];
  localData: Image[];
  open: boolean;
  showImg: string;
  blur: string;

  constructor() {
    this.open = false;
    this.blur = "none";
    this.localData = JSON.parse(localStorage.getItem("images"));
    if (this.localData) {
      this.localData.forEach(img => {
        this.images.push(new Image(img.src, img.likecount));
      });
    }
    else {
      this.images = [
        new Image("https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg?auto=compress&cs=tinysrgb&dpr=1&h=400", 0),
        new Image("https://images.pexels.com/photos/462044/pexels-photo-462044.jpeg?auto=compress&cs=tinysrgb&dpr=1&h=400", 0),
        new Image("https://images.pexels.com/photos/814499/pexels-photo-814499.jpeg?auto=compress&cs=tinysrgb&dpr=1&h=400", 0),
        new Image("https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&dpr=1&h=400", 0),
        new Image("https://images.pexels.com/photos/448714/pexels-photo-448714.jpeg?auto=compress&cs=tinysrgb&dpr=1&h=400", 0),
        new Image("https://images.pexels.com/photos/371589/pexels-photo-371589.jpeg?auto=compress&cs=tinysrgb&dpr=1&h=400", 0),
        new Image("https://images.pexels.com/photos/360912/pexels-photo-360912.jpeg?auto=compress&cs=tinysrgb&dpr=1&h=400", 0),
        new Image("https://images.pexels.com/photos/534164/pexels-photo-534164.jpeg?auto=compress&cs=tinysrgb&dpr=1&h=400", 0),
        new Image("https://images.pexels.com/photos/858115/pexels-photo-858115.jpeg?auto=compress&cs=tinysrgb&dpr=1&h=400", 0),
        new Image("https://images.pexels.com/photos/462034/pexels-photo-462034.jpeg?auto=compress&cs=tinysrgb&dpr=1&h=400", 0),
        new Image("https://images.pexels.com/photos/458785/pexels-photo-458785.jpeg?auto=compress&cs=tinysrgb&dpr=1&h=400", 0),
        new Image("https://images.pexels.com/photos/414511/pexels-photo-414511.jpeg?auto=compress&cs=tinysrgb&dpr=1&h=400", 0),
      ];
    }
  }
  openImg(e) {
    this.showImg = `url(${e})`;
    this.open = true;
    this.blur = "blur(4px)";
    // backframe.classList.toggle("opacityframe");
    // frame.classList.toggle("pop");
    // frame.style.backgroundImage = "url(" + e.target.src + ")";
    // frame.onclick = closeFrame;
    // layout.style.filter = "blur(4px)";
  }
  closeFrame() {
    // frame.classList.toggle("pop");
    // frame.innerHTML = "";
    // backframe.classList.toggle("opacityframe");
    // layout.style.filter = "none";
    this.open = false;
    this.blur = "none";
  }
}
