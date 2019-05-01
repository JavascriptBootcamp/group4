import { Component, OnInit } from '@angular/core';
import { Picture } from '../picture.model';
import { ActivatedRoute } from '@angular/router';
import { PicturesService } from '../pictures.service';
import { Author } from '../author.model';

@Component({
  selector: 'app-pictures',
  templateUrl: './pictures.component.html',
  styleUrls: ['./pictures.component.css']
})
export class PicturesComponent implements OnInit {

  pictures: Picture[];
  currentPicture: Picture;
  currentAuthor: Author;
  authorInputUrl: string;

  constructor(private activatedRoute: ActivatedRoute, private picturesService: PicturesService) {
    this.pictures = [];
    this.currentPicture = null;
    this.authorInputUrl = '';
    this.currentAuthor = null;
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
    this.authorInputUrl = this.activatedRoute.snapshot.params.author;
    this.pictures = this.picturesService.getPictures();

    if (currentPictureId)
      this.currentPicture = this.pictures.filter(pic => pic.id === +currentPictureId)[0];

    if (this.authorInputUrl) {
      if (Number(this.authorInputUrl))
        this.pictures = this.pictures.filter(pic => pic.author.id === +this.authorInputUrl); 
      else 
        this.pictures = this.pictures.filter(pic => pic.author.name === this.authorInputUrl);
      this.currentAuthor = this.pictures[0].author;
    }
  }
}
