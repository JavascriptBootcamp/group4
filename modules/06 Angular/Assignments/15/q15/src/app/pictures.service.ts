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
      { id: i++, imgSrc:"assets/images/pic1.jpg", author:{ id:1, name:"author1", profilePicture: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/10_avatar-512.png', facebookProfileURL: 'https://www.facebook.com/daniel.brosh', description: 'Description author1'}, likeCounter:0 },
      { id: i++, imgSrc:"assets/images/pic2.jpg", author:{ id:2, name:"author2", profilePicture: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/10_avatar-512.png', facebookProfileURL: 'https://www.facebook.com/daniel.brosh', description: 'Description author2' } , likeCounter:0 }, 
      { id: i++, imgSrc:"assets/images/pic3.jpg", author:{ id:3, name:"author3", profilePicture: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/10_avatar-512.png', facebookProfileURL: 'https://www.facebook.com/daniel.brosh', description: 'Description author3'} , likeCounter:0  },
      { id: i++, imgSrc:"assets/images/pic4.jpg", author:{ id:1, name:"author1",profilePicture: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/10_avatar-512.png', facebookProfileURL: 'https://www.facebook.com/daniel.brosh', description: 'Description author1'}, likeCounter:0  }, 
      { id: i++, imgSrc:"assets/images/pic5.jpg", author:{ id:2, name:"author2", profilePicture: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/10_avatar-512.png', facebookProfileURL: 'https://www.facebook.com/daniel.brosh', description: 'Description author2'} , likeCounter:0  }, 
      { id: i++, imgSrc:"assets/images/pic6.jpg", author:{ id:3, name:"author3", profilePicture: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/10_avatar-512.png', facebookProfileURL: 'https://www.facebook.com/daniel.brosh', description: 'Description author3'} , likeCounter:0  }, 
      { id: i++, imgSrc:"assets/images/pic7.jpg", author:{ id:1, name:"author1", profilePicture: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/10_avatar-512.png', facebookProfileURL: 'https://www.facebook.com/daniel.brosh', description: 'Description author1'} , likeCounter:0  },
      { id: i++, imgSrc:"assets/images/pic8.jpg", author:{ id:2, name:"author2", profilePicture: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/10_avatar-512.png', facebookProfileURL: 'https://www.facebook.com/daniel.brosh', description: 'Description author2'} , likeCounter:0  }, 
      { id: i++, imgSrc:"assets/images/pic9.jpg", author:{ id:3, name:"author3", profilePicture: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/10_avatar-512.png', facebookProfileURL: 'https://www.facebook.com/daniel.brosh', description: 'Description author3'} , likeCounter:0  }, 
      { id: i++, imgSrc:"assets/images/pic10.jpg", author:{ id:1, name:"author1", profilePicture: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/10_avatar-512.png', facebookProfileURL: 'https://www.facebook.com/daniel.brosh', description: 'Description author1'} , likeCounter:0  },
      { id: i++, imgSrc:"assets/images/pic4.jpg", author:{ id:1, name:"author1", profilePicture: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/10_avatar-512.png', facebookProfileURL: 'https://www.facebook.com/daniel.brosh', description: 'Description author1'} , likeCounter:0  }, 
      { id: i++, imgSrc:"assets/images/pic5.jpg", author:{ id:2, name:"author2", profilePicture: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/10_avatar-512.png', facebookProfileURL: 'https://www.facebook.com/daniel.brosh', description: 'Description author2'} , likeCounter:0  }, 
      { id: i++, imgSrc:"assets/images/pic6.jpg", author:{ id:3, name:"author3", profilePicture: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/10_avatar-512.png', facebookProfileURL: 'https://www.facebook.com/daniel.brosh', description: 'Description author3'} , likeCounter:0  }, 
      { id: i++, imgSrc:"assets/images/pic7.jpg", author:{ id:1, name:"author1", profilePicture: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/10_avatar-512.png', facebookProfileURL: 'https://www.facebook.com/daniel.brosh', description: 'Description author1'} , likeCounter:0  },
      { id: i++, imgSrc:"assets/images/pic8.jpg", author:{ id:2, name:"author2", profilePicture: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/10_avatar-512.png', facebookProfileURL: 'https://www.facebook.com/daniel.brosh', description: 'Description author2'} , likeCounter:0  }, 
      { id: i++, imgSrc:"assets/images/pic9.jpg", author:{ id:3, name:"author3", profilePicture: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/10_avatar-512.png', facebookProfileURL: 'https://www.facebook.com/daniel.brosh', description: 'Description author3'} , likeCounter:0  } ];
   }

   getPictures() :Picture[]{
    return this.pictures;
   }

   setPictureLikeCounter(id,likeCounter){
    this.pictures.forEach(pic => {
       if(pic.id === id){
        pic.likeCounter = likeCounter;
        return;
       }
    });
   }
}
