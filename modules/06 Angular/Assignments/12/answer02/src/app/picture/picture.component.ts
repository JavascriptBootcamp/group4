import { Component, OnInit } from '@angular/core';
import {IPicture} from '../interfaces/IPicture';
import { PictureService } from '../services/picture.service';



@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.css']
})
export class PictureComponent implements OnInit {

  pictures:IPicture[];

  constructor(private pictureService:PictureService) {
    
   }

   

  ngOnInit() {
    this.pictures=this.pictureService.getPictures();
  }

}
