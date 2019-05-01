import { Component, OnInit } from '@angular/core';
import { ImageService } from '../../image.service';
import { Img } from '../../modules/img';
import { Author } from 'src/app/modules/Author';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  imgs:Img[];
  auther:Author;
  constructor(    private imageService:   ImageService,
    ) { }

  ngOnInit() {
      this.imgs=this.imageService.getimgs();
  }

}
