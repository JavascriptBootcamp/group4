import { Injectable } from '@angular/core';
import { Image } from '../image.model';
import { Author } from '../author.model';
import { ImagesService } from './images.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  images: Image[];
  constructor(private imagesService: ImagesService) {
    this.images = this.imagesService.getImages();
  }

  public getAuthorImages(id: string): string[] {
    return this.images.filter(item => (item.author.authorId).toString() === id).map(item => item.srcImg);
  }

  public getAuthorDetails(id: string): Author {
    return this.images.map(item => item.author).find(author => (author.authorId).toString() === id);
  }
}
