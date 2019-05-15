import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserImagesService } from '../user-images.service';
import { Img } from '../user-images.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-auther-pics',
  templateUrl: './auther-pics.component.html',
  styleUrls: ['./auther-pics.component.css']
})
export class AutherPicsComponent implements OnInit,OnDestroy{
userImages: Img[];
name
  constructor(private  userImagesService : UserImagesService,
               private route: ActivatedRoute) { }

  ngOnInit() {
  this.name = this.route.snapshot.params.name;
   const index = this.userImagesService.imagesUsers.findIndex(val => {
     return val.name === this.name;
   })

   this.userImages = this.userImagesService.imagesUsers[index].images;
  }
  ngDoCheck(){
    this.name = this.route.snapshot.params.name;
    const index = this.userImagesService.imagesUsers.findIndex(val => {
      return val.name === this.name;
    })

    this.userImages = this.userImagesService.imagesUsers[index].images;
  }
   ngOnDestroy() {
  }

}
