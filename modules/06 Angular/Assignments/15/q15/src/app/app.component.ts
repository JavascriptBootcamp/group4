import { Component } from '@angular/core';
import { Picture} from './models/Picture';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']})

export class AppComponent {
  title = 'q15';

  pictures: Picture[];
  currentPicture: Picture;

  constructor(){
    let i=0;
    this.pictures= [
      { id: i++, imgSrc:"assets/images/pic1.jpg",author:"author1", likeCounter:0 },
      { id: i++, imgSrc:"assets/images/pic2.jpg",author:"author2", likeCounter:0 }, 
      { id: i++, imgSrc:"assets/images/pic3.jpg",author:"author3", likeCounter:0  },
      { id: i++, imgSrc:"assets/images/pic4.jpg",author:"author1", likeCounter:0  }, 
      { id: i++, imgSrc:"assets/images/pic5.jpg",author:"author2", likeCounter:0  }, 
      { id: i++, imgSrc:"assets/images/pic6.jpg",author:"author3", likeCounter:0  }, 
      { id: i++, imgSrc:"assets/images/pic7.jpg",author:"author1", likeCounter:0  },
      { id: i++, imgSrc:"assets/images/pic8.jpg",author:"author2", likeCounter:0  }, 
      { id: i++, imgSrc:"assets/images/pic9.jpg",author:"author3", likeCounter:0  }, 
      { id: i++, imgSrc:"assets/images/pic10.jpg",author:"author1", likeCounter:0  } ];
      this.currentPicture = this.pictures[0];
  }

  onImgClilcked(picture: Picture){
     this.currentPicture = picture;
  }
}
