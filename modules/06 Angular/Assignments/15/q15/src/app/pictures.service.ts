import { Injectable } from '@angular/core';
import { Picture } from './picture.model';

@Injectable({
  providedIn: 'root'
})
export class PicturesService{
  pictures: Picture[];
  constructor() {
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
   }

   getPictures() :Picture[]{
    return this.pictures;
   }
}
