import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  selectedVideoIndex: number;
  constructor(private apiService: ApiService) {
    this.selectedVideoIndex = 0;
   }
  showThisVideo(video){
    console.log(video);
    let newIndex = this.apiService.songs.findIndex((item)=>{
      console.log("item="+item.videoId);
      return video === item.videoId;
    })
    this.selectedVideoIndex = newIndex;
    console.log(this.selectedVideoIndex);
  }
}
