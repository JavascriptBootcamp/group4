import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  imagesURLsArr: string[];
  MAX_IMAGE_INDEX: number;
  VISIBLE_SLIDER_IMAGES_LENGTH: number;
  firstVisibleSlideImageIndex: number;
  secondVisibleSlideImageIndex: number;
  lastVisibleSlideImageIndex: number;
  imgSrcIndex: number;
  imgSrc: string;


  constructor() {
    this.imagesURLsArr = [
      "https://upload.wikimedia.org/wikipedia/commons/8/87/TVE_La1_-_Logo_2008.png",
      "http://nebula.wsimg.com/cfb133246fb6949808b53af3421575e9?AccessKeyId=5F480AA257F587756A6D&disposition=0&alloworigin=1",
      "https://cdn.dribbble.com/users/271641/screenshots/1531994/num3.gif",
      "https://steamuserimages-a.akamaihd.net/ugc/932690417985966398/2E1D48DE5B5F4D5CBCA137E9772474BD9098BC16/",
      "https://static.planetminecraft.com/files/resource_media/screenshot/1249/5_4330267_lrg.jpg",
      "https://blog.solidsignal.com/wp-content/uploads/2012/07/number6.jpg",
      "https://steemitimages.com/DQmfCYiikJ7zeJLoRTD14xWwJ3r9mdUErf43tBwGf1ve9La/php-7.jpg",
      "http://clipart-library.com/image_gallery2/8-Number-PNG.png",
      "http://mathematics-in-europe.eu/wp-content/uploads/2016/02/3_playing_cards-3.jpg",
      "https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2017/04/windows-10-redmond-796x448.jpg" 
    ];

    this.MAX_IMAGE_INDEX = 9;
    this.VISIBLE_SLIDER_IMAGES_LENGTH = 3;
    this.firstVisibleSlideImageIndex = 0;
    this.secondVisibleSlideImageIndex = this.firstVisibleSlideImageIndex + 1;
    this.lastVisibleSlideImageIndex = this.VISIBLE_SLIDER_IMAGES_LENGTH - 1;

    this.imgSrcIndex = Number(localStorage.getItem('imgSrcIndex'));
    this.imgSrcIndex = this.imgSrcIndex ? this.imgSrcIndex : 0;  
  }


  onclickMainLeftArrow() {
    if(this.imgSrcIndex === 0) {
      this.imgSrcIndex = this.imagesURLsArr.length - 1;
      localStorage.setItem('imgSrcIndex', this.imgSrcIndex.toString());
    } 
    else {
      this.imgSrcIndex -= 1;  
      localStorage.setItem('imgSrcIndex', this.imgSrcIndex.toString());
    } 
  }

  onclickMainRightArrow() {
    if(this.imgSrcIndex === this.imagesURLsArr.length - 1) {
      this.imgSrcIndex = 0;
      localStorage.setItem('imgSrcIndex', this.imgSrcIndex.toString());
    } 
    else {
      this.imgSrcIndex += 1;
      localStorage.setItem('imgSrcIndex', this.imgSrcIndex.toString());
    }  
  }

  onclickSliderLeftArrow() {
    if(this.firstVisibleSlideImageIndex === 0) return;
    else {
      this.firstVisibleSlideImageIndex -= 1;
      this.secondVisibleSlideImageIndex -= 1;
      this.lastVisibleSlideImageIndex -= 1;
    }
  }

  onclickSliderRightArrow() {
    if(this.lastVisibleSlideImageIndex === this.imagesURLsArr.length - 1) return;
    else {
      this.firstVisibleSlideImageIndex += 1;
      this.secondVisibleSlideImageIndex += 1;
      this.lastVisibleSlideImageIndex += 1;
    }
  }

  displayClickedSlideImageAsMainImage(event) {
    this.imgSrc = event.target.src;

    for(let i: number = 0; i < this.imagesURLsArr.length; i++) {
      if(this.imgSrc === this.imagesURLsArr[i]) {
        this.imgSrcIndex = i;
        localStorage.setItem('imgSrcIndex', this.imgSrcIndex.toString());
        return;
      }
    }
  }
}