import { Injectable } from '@angular/core';
import { ImagesService } from './images.service';
interface Img {
  src:string;
  like:number;
}
interface UserImages {
  name:string;
  images:Img[];
}
@Injectable({
  providedIn: 'root'
})
export class UserImagesService {

  imagesUsers:UserImages[];
  imagesUser:UserImages;

  constructor(private imagesService:ImagesService) {
    const src= "https://cdn.dribbble.com/users/1463678/screenshots/3264921/full-stack-dribbble.png";
    const index = this.imagesService.images.findIndex((val)=> {
      return val.src === src;
    });
    this.imagesUsers = [{name:"avi", images :[{src:src,
    like:this.imagesService.images[index].like}]}];
  }


}
