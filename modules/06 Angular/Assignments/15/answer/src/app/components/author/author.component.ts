import { Component, OnInit } from '@angular/core';
import { ImageService } from '../../image.service';
import { AuthorService } from '../../Author.service';

import { Img } from '../../modules/img';
import { Author } from 'src/app/modules/Author';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  imgs:Img[];
  author:Author;
  constructor(    private route: ActivatedRoute,private imageService:   ImageService,private authorService:   AuthorService
    ) { }

  ngOnInit() {
      this.imgs=this.imageService.getimgs();
      console.log( this.authorService.getAuthor( this.route.snapshot.paramMap.get("ID")))
      this.author = this.authorService.getAuthor( this.route.snapshot.paramMap.get("ID"));

  }

}
