import { Injectable } from '@angular/core';
import { Picture } from './picture.model';

@Injectable({
  providedIn: 'root'
})
export class PicturesService{
  pictures: Picture[];
  baseUrl: string;
  port: number;
  constructor() {
    this.port = 5000;
    this.baseUrl = `http://localhost:${this.port}`;
    let i=0;
    this.pictures = [
      { id: i++, imgSrc:"assets/images/pic1.jpg", author:{ id:1, name:"author1", profilePicture: 'XXX', facebookProfileURL: 'YYY', description: 'ZZZ'}, likeCounter:0 },
      { id: i++, imgSrc:"assets/images/pic2.jpg", author:{ id:2, name:"author2", profilePicture: 'XXX', facebookProfileURL: 'YYY', description: 'ZZZ' } , likeCounter:0 }, 
      { id: i++, imgSrc:"assets/images/pic3.jpg", author:{ id:3, name:"author3", profilePicture: 'XXX', facebookProfileURL: 'YYY', description: 'ZZZ'} , likeCounter:0  },
      { id: i++, imgSrc:"assets/images/pic4.jpg", author:{ id:1, name:"author1",profilePicture: 'XXX', facebookProfileURL: 'YYY', description: 'ZZZ'}, likeCounter:0  }, 
      { id: i++, imgSrc:"assets/images/pic5.jpg", author:{ id:2, name:"author2", profilePicture: 'XXX', facebookProfileURL: 'YYY', description: 'ZZZ'} , likeCounter:0  }, 
      { id: i++, imgSrc:"assets/images/pic6.jpg", author:{ id:3, name:"author3", profilePicture: 'XXX', facebookProfileURL: 'YYY', description: 'ZZZ'} , likeCounter:0  }, 
      { id: i++, imgSrc:"assets/images/pic7.jpg", author:{ id:1, name:"author1", profilePicture: 'XXX', facebookProfileURL: 'YYY', description: 'ZZZ'} , likeCounter:0  },
      { id: i++, imgSrc:"assets/images/pic8.jpg", author:{ id:2, name:"author2", profilePicture: 'XXX', facebookProfileURL: 'YYY', description: 'ZZZ'} , likeCounter:0  }, 
      { id: i++, imgSrc:"assets/images/pic9.jpg", author:{ id:3, name:"author3", profilePicture: 'XXX', facebookProfileURL: 'YYY', description: 'ZZZ'} , likeCounter:0  }, 
      { id: i++, imgSrc:"assets/images/pic10.jpg", author:{ id:1, name:"author1", profilePicture: 'XXX', facebookProfileURL: 'YYY', description: 'ZZZ'} , likeCounter:0  },
      { id: i++, imgSrc:"assets/images/pic4.jpg", author:{ id:1, name:"author1", profilePicture: 'XXX', facebookProfileURL: 'YYY', description: 'ZZZ'} , likeCounter:0  }, 
      { id: i++, imgSrc:"assets/images/pic5.jpg", author:{ id:2, name:"author2", profilePicture: 'XXX', facebookProfileURL: 'YYY', description: 'ZZZ'} , likeCounter:0  }, 
      { id: i++, imgSrc:"assets/images/pic6.jpg", author:{ id:3, name:"author3", profilePicture: 'XXX', facebookProfileURL: 'YYY', description: 'ZZZ'} , likeCounter:0  }, 
      { id: i++, imgSrc:"assets/images/pic7.jpg", author:{ id:1, name:"author1", profilePicture: 'XXX', facebookProfileURL: 'YYY', description: 'ZZZ'} , likeCounter:0  },
      { id: i++, imgSrc:"assets/images/pic8.jpg", author:{ id:2, name:"author2", profilePicture: 'XXX', facebookProfileURL: 'YYY', description: 'ZZZ'} , likeCounter:0  }, 
      { id: i++, imgSrc:"assets/images/pic9.jpg", author:{ id:3, name:"author3", profilePicture: 'XXX', facebookProfileURL: 'YYY', description: 'ZZZ'} , likeCounter:0  } ];
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

   getLikes(id){
      const query = `${this.baseUrl}/likes?counterID=${id}`;
      return fetch(query);
   }

   saveLikes(id,likeCounter){
     const query = `${this.baseUrl}/like`;// post
     const method = "POST";
     const body = {"counterID":id.toString(),"likeCounter":likeCounter};
     const header = { method, headers:{"Content-Type": "application/json"}, body: JSON.stringify(body) };
     return fetch(query,header);
   }

   updateLikes(id,likeCounter){
    const query = `${this.baseUrl}/like?counterID=${id}`;// put
    const method = "PUT";
    const body = { likeCounter };
    const header = { method, headers:{"Content-Type": "application/json"}, body: JSON.stringify(body) };

    return fetch(query,header);
  }
}
