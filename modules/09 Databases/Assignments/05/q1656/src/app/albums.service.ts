import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  url:string;
  constructor() {
    this.url = 'http://localhost:5000/';
   }

  albumPicEventActivated = new Subject<string[]>();

   async getAlbums(){
     const response = await fetch(this.url + 'albums');
     const data = await response.json();
     return data;
   }

   async getPictures(id){
    const response = await fetch(this.url + `album/Pictures?id=${id}`);
    const data = await response.json();
    return data.map(d=>d.src);
  }
  




}
