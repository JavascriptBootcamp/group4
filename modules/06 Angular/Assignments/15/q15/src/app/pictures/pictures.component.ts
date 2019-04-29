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

  constructor(private activatedRoute: ActivatedRoute, private picturesService: PicturesService) {
    this.pictures = [];
    this.currentPicture = null;
  }

  onImgClilcked(picture: Picture) {
    this.currentPicture = picture;
    localStorage.setItem("currentPictureID", (this.currentPicture.id.toString()));
  }

  onBigImgClilcked() {
    this.currentPicture = null;
    localStorage.removeItem("currentPictureID");
  }

  ngOnInit() {
    const currentPictureId = localStorage.getItem("currentPictureID");
    const authorInputUrl: string = this.activatedRoute.snapshot.params.author;
    this.pictures = this.picturesService.getPictures();

    if (currentPictureId)
      this.currentPicture = this.pictures.filter(pic => pic.id === +currentPictureId)[0];

    if (authorInputUrl) {
      if (Number(authorInputUrl))
        this.pictures = this.pictures.filter(pic => pic.authorID === +authorInputUrl); 
      else 
        this.pictures = this.pictures.filter(pic => pic.author === authorInputUrl);
    }
  }
}
