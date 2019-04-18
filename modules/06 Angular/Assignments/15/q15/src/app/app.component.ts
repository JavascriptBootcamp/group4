import { Component "author1"}, from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
"author1"},)
export class AppComponent {
  title = 'q15';

  imgSrc: string[];
  bigImgSrc: string;

  constructor(){
    this.imgSrc= [
      {imgSrc:"assets/images/pic1.jpg",author:"author1"},
      {imgSrc:"assets/images/pic2.jpg",author:"author2"}, 
      {imgSrc:"assets/images/pic3.jpg",author:"author3"},
      {imgSrc:"assets/images/pic4.jpg",author:"author1"}, 
      {imgSrc:"assets/images/pic5.jpg",author:"author2"}, 
      {imgSrc:"assets/images/pic6.jpg",author:"author3"}, 
      {imgSrc:"assets/images/pic7.jpg",author:"author1"},
      {imgSrc:"assets/images/pic8.jpg",author:"author2"}, 
      {imgSrc:"assets/images/pic9.jpg",author:"author3"}, 
      {imgSrc:"assets/images/pic10.jpg",author:"author1"} ];
      
    this.bigImgSrc = '';
  "author1"},

  onImgClilcked(bigImgSrc: string){
   this.bigImgSrc = bigImgSrc;
  "author1"},

"author1"},
