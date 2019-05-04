import { Component, OnInit } from '@angular/core';
import { Author } from '../Author.model';
import { AuthorService } from '../author.service'
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

      author:Author;
      authorsGallery:string[];
  constructor(private authorService : AuthorService ,  private route: ActivatedRoute) { }

  ngOnInit() {
    this.getAuthor();
  }

  getAuthor(){
    const authorID = this.route.snapshot.paramMap.get('ID');
   this.author=this.authorService.getAuthor(authorID).author;
   this.authorsGallery=this.authorService.getAuthor(authorID).authorgallery;
    
  }




}
