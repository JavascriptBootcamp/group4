import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'body',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  arrayImgs: string[];
  mainPicSrc: string;
  constructor() {
    this.arrayImgs = ["https://cdn.the-scientist.com/assets/articleNo/30781/iImg/2460/df892096-47e0-4041-ab30-94e045f43a82-puerto-rican-parrot-full.jpg",
      "https://animals.sandiegozoo.org/sites/default/files/2016-08/category-thumbnail-amphibians_0.jpg",
      "https://www.iata.org/whatwedo/cargo/PublishingImages/cargo_live_animals_parrot.jpg",
      "https://www.rd.com/wp-content/uploads/2016/05/01-smart-animals-racoon.jpg",
      "https://www.extremetech.com/wp-content/uploads/2013/09/4Vln8-640x428.jpg",
      "http://www.freedigitalphotos.net/images/img/homepage/87357.jpg",
      "https://www.what-dog.net/Images/faces2/scroll001.jpg",
      "https://www.catster.com/wp-content/uploads/2018/07/Savannah-cat-long-body-shot.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/c/c7/Puppy_on_Halong_Bay.jpg",
      "http://4.bp.blogspot.com/-GlWhUQsMUx4/TpeKtUpRvmI/AAAAAAAA3tk/DUIJjizW_aw/s1600/Sea_Turtle_Animal_Wallpapers.jpg"];
  }

  changeMainPicEvent(src: string) {
    this.mainPicSrc = src;
    window.localStorage.setItem("key", this.mainPicSrc);
  }

  previous() {
    for (var i = 0; i < this.arrayImgs.length; i++) {
      if (this.arrayImgs[i] === this.mainPicSrc) {
        window.localStorage.setItem("key", this.arrayImgs[i]);

        if (i === 0) {
          this.mainPicSrc = this.arrayImgs[this.arrayImgs.length - 1];
          window.localStorage.setItem("key", this.arrayImgs[this.arrayImgs.length - 1]);
          break;
        } else {
          this.mainPicSrc = this.arrayImgs[i - 1];
          window.localStorage.setItem("key", this.arrayImgs[i - 1]);
          break;
        }
      }
    }
  }

  next() {
    for (var i = 0; i < this.arrayImgs.length; i++) {
      if (this.arrayImgs[i] === this.mainPicSrc) {
        window.localStorage.setItem("key", this.arrayImgs[i]);

        if (i === this.arrayImgs.length - 1) {
          this.mainPicSrc = this.arrayImgs[0];
          window.localStorage.setItem("key", this.arrayImgs[0]);
          break;
        } else {
          this.mainPicSrc = this.arrayImgs[i + 1];
          window.localStorage.setItem("key", this.arrayImgs[i + 1]);
          break;
        }
      }
    }
  }

  ngOnInit() {
    if(window.sessionStorage.getItem("key")){
      this.mainPicSrc = window.sessionStorage.getItem("key");
    }else{
      this.mainPicSrc = "https://www.extremetech.com/wp-content/uploads/2013/09/4Vln8-640x428.jpg";
    }
  }
}
