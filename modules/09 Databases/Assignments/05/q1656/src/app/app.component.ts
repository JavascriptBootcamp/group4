import { Component, OnInit,OnDestroy } from '@angular/core';
import {AlbumsService} from './albums.service';
import {Subscription} from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy {
  images: string[];
  imgSrcIndex: number;
  subsActivated:Subscription;
  constructor(private albumsService:AlbumsService){
    this.images = [];
    this.imgSrcIndex = Number(localStorage.getItem("imgSrcIndex"));
    this.imgSrcIndex = this.imgSrcIndex ? this.imgSrcIndex : 0; 
  }

  async ngOnInit(){
    this.images = await this.albumsService.getPictures(1);

    this.subsActivated = this.albumsService.albumPicEventActivated.subscribe(pictures=>{
      this.images = pictures;
    })

  }

  ngOnDestroy(){
    this.subsActivated.unsubscribe();
  } 

  onShowBigPicture(imgSrcIndex: number){
    this.imgSrcIndex = imgSrcIndex;
    this.saveData();
  }

  showNextImage(){
    if(this.imgSrcIndex === this.images.length-1)
      // this.imgSrcIndex = 0;
      return;
    else
      this.imgSrcIndex++;
      this.saveData();
  }

  saveData(){
    localStorage.setItem("imgSrcIndex",this.imgSrcIndex.toString());
  }

  showPrevImage(){
    if(this.imgSrcIndex === 0)
      // this.imgSrcIndex = this.images.length -1;
      return;
    else  
      this.imgSrcIndex--;
    this.saveData();
  }

}
