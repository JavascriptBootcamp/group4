import { Component } from '@angular/core';

@Component({
  selector: 'body',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mainImg: string;
  arrayImgs: string[];
  blurVisible: boolean;
  pictureVisible: boolean;
  imageId:number;
  constructor() {
    this.mainImg = "";
    this.blurVisible = false;
    this.pictureVisible = false;
    this.arrayImgs = ["https://cdn.the-scientist.com/assets/articleNo/30781/iImg/2460/df892096-47e0-4041-ab30-94e045f43a82-puerto-rican-parrot-full.jpg",
      "https://animals.sandiegozoo.org/sites/default/files/2016-08/category-thumbnail-amphibians_0.jpg",
      "https://www.iata.org/whatwedo/cargo/PublishingImages/cargo_live_animals_parrot.jpg",
      "https://www.rd.com/wp-content/uploads/2016/05/01-smart-animals-racoon.jpg",
      "https://www.extremetech.com/wp-content/uploads/2013/09/4Vln8-640x428.jpg",
      "http://www.freedigitalphotos.net/images/img/homepage/87357.jpg",
      "https://www.what-dog.net/Images/faces2/scroll001.jpg",
      "https://www.catster.com/wp-content/uploads/2018/07/Savannah-cat-long-body-shot.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/c/c7/Puppy_on_Halong_Bay.jpg"];
  }

  imgPressed(src: string) {
    this.mainImg = src;
    this.blurVisible = true;
    this.pictureVisible = true;
  }

  onBlur(){
    this.blurVisible = false;
    this.pictureVisible = false;
  }
}
