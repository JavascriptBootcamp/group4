import { Injectable } from '@angular/core';
import { Img } from "../modules/img";

@Injectable({
  providedIn: 'root'
})
export class ImgService {
  imgs: Img[];
  url:string;
  constructor() {
    this.url = 'http://localhost:5000/';

    this.imgs = [];
    
  }

  async get_imgs() {
    const response = await fetch( this.url + 'images');
    const data = await response.json();
    this.imgs = data;
    return this.imgs;
  }

  addLike(likes,src){
    fetch(this.url + 'images/like',{
      method:'PUT',
      headers:{'Content-Type': 'application/json'},
      body:JSON.stringify({likes,src})
    })

  }

  get_Top3(): string[] {
    let newTop3 = this.imgs.slice(0).sort((a,b) => ( b.likes - a.likes)).slice(0,3).map(img => img.src);
    return newTop3;
  }

  get_imgs_by_author(id: number): string[] {
    let imgs_list = this.imgs.slice(0).filter(img => img.author_id===id).map(img => img.src);
    return imgs_list;
  }
}
