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
    /*this.images = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqsw9q1gKQhk3M3krgRtn9vCgYaKDvQD_GgJdL-y-jNiJRLbgC",
                   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKIN7mbSbgvFXj2PXLzjXbC_NnVVOBoqHMgv9p8tw1KZuV-ngJGw",
                   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ82DqniYRM-q3SKuf-ziG1u9Fc4gGuD8O8exGkZazb6SurMllSmw",
                   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ4mFHp-axQIxtrs-yV_DRePjPn6C2tCT7EFnVAJUayne7ZfaG",
                   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf6ltr-w2OSqtk-nh4eVIpndpQncu3r6M3EfiVVR5s5cuEGVOk",
                   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa0mrze3yjNQjIjRtfxVHYeRrDZwNrNV3Lq4FHq_l-Z1eKWrm71w",
                   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI7arfj-4VZnRls18ELncSRFACyqBCMcJLjZcxyCmr9DVC2qNrbA",
                   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfgKOVXDVIY2Yaq0a0rDLWoV0ks0zcQVDa6aCQVJVGcD6llupPPw",
                   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsQN-mcmQVIi2HLnAZhvJ-JCYZ1Yf7EtNlA1wVBf8gAYkh6T2r",
                   "https://www.barraquer.com/wp-content/uploads/2017/07/el-ojo-del-surfista-p-08-2017.jpg"];
*/
  // this.imgSrcIndex = 0;
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