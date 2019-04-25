import { Component, OnInit } from '@angular/core';
import { Picture } from '../picture.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pictures',
  templateUrl: './pictures.component.html',
  styleUrls: ['./pictures.component.css']
})
export class PicturesComponent implements OnInit {

  
  pictures: Picture[];
  currentPicture: Picture;

  constructor(private activatedRoute: ActivatedRoute){
    let i=0;
    this.pictures = [
      { id: i++, imgSrc:"assets/images/pic1.jpg", author:"author1", likeCounter:0 },
      { id: i++, imgSrc:"assets/images/pic2.jpg", author:"author2", likeCounter:0 }, 
      { id: i++, imgSrc:"assets/images/pic3.jpg", author:"author3", likeCounter:0  },
      { id: i++, imgSrc:"assets/images/pic4.jpg", author:"author1", likeCounter:0  }, 
      { id: i++, imgSrc:"assets/images/pic5.jpg", author:"author2", likeCounter:0  }, 
      { id: i++, imgSrc:"assets/images/pic6.jpg", author:"author3", likeCounter:0  }, 
      { id: i++, imgSrc:"assets/images/pic7.jpg", author:"author1", likeCounter:0  },
      { id: i++, imgSrc:"assets/images/pic8.jpg", author:"author2", likeCounter:0  }, 
      { id: i++, imgSrc:"assets/images/pic9.jpg", author:"author3", likeCounter:0  }, 
      { id: i++, imgSrc:"assets/images/pic10.jpg", author:"author1", likeCounter:0  },
      { id: i++, imgSrc:"assets/images/pic4.jpg", author:"author1", likeCounter:0  }, 
      { id: i++, imgSrc:"assets/images/pic5.jpg", author:"author2", likeCounter:0  }, 
      { id: i++, imgSrc:"assets/images/pic6.jpg", author:"author3", likeCounter:0  }, 
      { id: i++, imgSrc:"assets/images/pic7.jpg", author:"author1", likeCounter:0  },
      { id: i++, imgSrc:"assets/images/pic8.jpg", author:"author2", likeCounter:0  }, 
      { id: i++, imgSrc:"assets/images/pic9.jpg", author:"author3", likeCounter:0  } ];
      this.currentPicture = null;
  }

  onImgClilcked(picture: Picture){
     this.currentPicture = picture;
  }

  onBigImgClilcked(){
    this.currentPicture = null;
  }
  

  ngOnInit(){
    let authorInputUrl: string = this.activatedRoute.snapshot.params.authorName;
    if(authorInputUrl)
      this.pictures = this.pictures.filter((pic)=>{ return pic.author === authorInputUrl});
  }
}
