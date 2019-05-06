import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Image } from '../image.model';
import { Author } from '../author.model';
import { AuthorService } from '../services/author.service';
import { ImagesService } from '../services/images.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  author: Author;
  authorImages: string[];
  authorId: string;
  images: Image[];

  constructor(private activatedRoute: ActivatedRoute,
    private authorService: AuthorService,
    private imagesService: ImagesService) {

    this.activatedRoute = activatedRoute;
    this.authorId = this.activatedRoute.snapshot.params.authorId;
    this.images = this.imagesService.getImages();
  }
  ngOnInit() {
    if (this.authorId) {
      this.authorImages = this.authorService.getAuthorImages(this.authorId);
      this.author = this.authorService.getAuthorDetails(this.authorId);
    }
  }
}
