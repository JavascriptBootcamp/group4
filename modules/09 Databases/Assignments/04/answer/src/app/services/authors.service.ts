import { Injectable } from '@angular/core';
import { Author } from "../modules/author";

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {
  url:string;
  authors: Author[];

  constructor() {
    this.url = 'http://localhost:5000/';

    this.authors = [];
   
  }

  async get_authors() {
    const response = await fetch( this.url + 'authors');
    const data = await response.json();
    this.authors = data;
  }

  get_author(id: number): Author {
    let author = this.authors.slice(0).filter(author => author.id===id);
    return author[0];
  }

}
