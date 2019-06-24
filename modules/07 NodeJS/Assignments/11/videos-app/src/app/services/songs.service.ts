import { Injectable } from '@angular/core';
import {Song} from '../modules/song';
import {Subject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SongsService {
   songs:Song[];
   url:string;

  constructor() {

    this.songs = [];
    this.url = 'http://localhost:8000/';
  
   }

   activatedEmitter = new Subject<Song>();

   async loadSongs(){

    const response = await fetch(this.url + 'songs');  
    this.songs = await response.json();
    return this.songs;
   } 




   

}
