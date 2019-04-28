import { Component, OnInit } from '@angular/core';
import { Picture } from '../picture.model';
import { ActivatedRoute } from '@angular/router';
import { PicturesService } from '../pictures.service';

@Component({
  selector: 'app-pictures',
  templateUrl: './pictures.component.html',
  styleUrls: ['./pictures.component.css']
})
export class PicturesComponent implements OnInit {

  pictures: Picture[];
  currentPicture: Picture;

  constructor(private activatedRoute: ActivatedRoute, private picturesService: PicturesService){
    this.pictures = [];
    this.currentPicture = null;
  }

  onImgClilcked(picture: Picture){
     this.currentPicture = picture;
  }

  onBigImgClilcked(){
    this.currentPicture = null;
  }

  ngOnInit(){
    let authorInputUrl: string = this.activatedRoute.snapshot.params.authorName;
    this.pictures = this.picturesService.getPictures();
    if(authorInputUrl)
      this.pictures = this.pictures.filter((pic)=>{ return pic.author === authorInputUrl});
    }
}
