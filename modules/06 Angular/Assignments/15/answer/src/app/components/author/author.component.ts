import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { Author } from "../../modules/author";
import { AuthorsService } from "../../services/authors.service";
import { Img } from "../../modules/img";
import { ImgService } from "../../services/img.service";

@Component({
  selector: 'author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  author: Author;
  author_imgs: string[]; 

  constructor(
    private authorsService: AuthorsService, 
    private activatedRoute: ActivatedRoute,
    private imgService : ImgService
    ) { 
    }

  ngOnInit() {
    let id = Number(this.activatedRoute.snapshot.params.id);
    this.author_imgs = this.imgService.get_imgs_by_author(id);
    this.author = this.authorsService.get_author(id);
  }

}
