import { Component, OnInit } from '@angular/core';
import { AuthorInfoService } from '../author-info.service';
import IAuthor from '../author.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-author-profile',
  templateUrl: './author-profile.component.html',
  styleUrls: ['./author-profile.component.css']
})
export class AuthorProfileComponent implements OnInit {

  authorDetails : IAuthor;

  constructor(private authorInfo : AuthorInfoService,private route : ActivatedRoute) {

  }

  ngOnInit() {
    let authorId = this.route.snapshot.params['id'];
    this.authorDetails = this.authorInfo.loadAuthorInfo(authorId);
  }

}
