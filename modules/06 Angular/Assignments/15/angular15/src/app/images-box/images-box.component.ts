import { Component } from '@angular/core';
import { Image } from '../image.model';

@Component({
  selector: 'app-images-box',
  templateUrl: './images-box.component.html',
  styleUrls: ['./images-box.component.css']
})
export class ImagesBoxComponent {
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
        this.images.push(new Image(img.src, img.likecount, img.author));
      });
      window.addEventListener("storage", function (e) {
        window.location.reload();
      }, false);
    }
    else {
      this.images = [
        new Image("https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg?auto=compress&cs=tinysrgb&dpr=1&h=400", 0, "moshe1"),
        new Image("https://images.pexels.com/photos/462044/pexels-photo-462044.jpeg?auto=compress&cs=tinysrgb&dpr=1&h=400", 0, "moshe2"),
        new Image("https://images.pexels.com/photos/814499/pexels-photo-814499.jpeg?auto=compress&cs=tinysrgb&dpr=1&h=400", 0, "moshe3"),
        new Image("https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&dpr=1&h=400", 0, "moshe4"),
        new Image("https://images.pexels.com/photos/448714/pexels-photo-448714.jpeg?auto=compress&cs=tinysrgb&dpr=1&h=400", 0, "moshe5"),
        new Image("https://images.pexels.com/photos/371589/pexels-photo-371589.jpeg?auto=compress&cs=tinysrgb&dpr=1&h=400", 0, "moshe6"),
        new Image("https://images.pexels.com/photos/360912/pexels-photo-360912.jpeg?auto=compress&cs=tinysrgb&dpr=1&h=400", 0, "moshe7"),
        new Image("https://images.pexels.com/photos/534164/pexels-photo-534164.jpeg?auto=compress&cs=tinysrgb&dpr=1&h=400", 0, "moshe8"),
        new Image("https://images.pexels.com/photos/858115/pexels-photo-858115.jpeg?auto=compress&cs=tinysrgb&dpr=1&h=400", 0, "moshe9"),
        new Image("https://images.pexels.com/photos/462034/pexels-photo-462034.jpeg?auto=compress&cs=tinysrgb&dpr=1&h=400", 0, "moshe10"),
        new Image("https://images.pexels.com/photos/458785/pexels-photo-458785.jpeg?auto=compress&cs=tinysrgb&dpr=1&h=400", 0, "moshe11"),
        new Image("https://images.pexels.com/photos/414511/pexels-photo-414511.jpeg?auto=compress&cs=tinysrgb&dpr=1&h=400", 0, "moshe12"),
      ];
    }
  }
  openImg(e) {
    this.showImg = `url(${e})`;
    this.open = true;
    this.blur = "blur(4px)";
  }
  closeFrame() {
    this.open = false;
    this.blur = "none";
  }
}
