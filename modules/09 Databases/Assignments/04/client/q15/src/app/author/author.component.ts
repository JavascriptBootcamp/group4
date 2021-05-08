import { Component, OnInit, Input } from '@angular/core';
import { Author } from '../author.model';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  @Input() author: Author;

  constructor() { }

  ngOnInit() {
    console.log(this.author);
  }

}
