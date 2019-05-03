import { Component, OnInit } from '@angular/core';
import {PictureDataService} from '../picture-data.service';
import { from } from 'rxjs';
import { IPicture } from '../ipicture';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.css']
})
export class PictureComponent implements OnInit {

  pictures: IPicture[];

  constructor(private pictureDataService: PictureDataService) { }

  getPictureData(): void{
    this.pictures = this.pictureDataService.getPictures();
  }

  ngOnInit() {
    this.getPictureData();
  }

}
