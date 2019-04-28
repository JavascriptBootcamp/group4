import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Image} from '../image.model';
import {ImageServiceService} from '../image-service.service'
@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  images:Image[];
  authorId:string;
  image:Image

  constructor(private route:ActivatedRoute,private imageServiceService:ImageServiceService) {
    this.images = []
   this.route = route;
   this.authorId = route.snapshot.params.authorId;
   this.imageServiceService = imageServiceService;
   }

  ngOnInit() {

    this.images = this.imageServiceService.getImages();
  }

}
