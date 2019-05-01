import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthorsService } from '../../authors.service'
import { Author } from "../../modules/author";

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})

export class AuthorComponent implements OnInit {
  activatedRoute: ActivatedRoute;
  author:Author;

  constructor(activatedRoute: ActivatedRoute,
    private authorsService: AuthorsService) {
    this.activatedRoute = activatedRoute;
  }

  ngOnInit() {
    console.log(this.activatedRoute.snapshot.params.authorId);
    this.author=this.authorsService.getAuthor(this.activatedRoute.snapshot.params.authorId);
    console.log(this.author);
  }

}
