import { Component, OnInit } from '@angular/core';
import { InstushService } from '../instush.service';

@Component({
  selector: 'app-author-details',
  templateUrl: './author-details.component.html',
  styleUrls: ['./author-details.component.css']
})
export class AuthorDetailsComponent implements OnInit {

  constructor(private instushService: InstushService) { 
  }

  ngOnInit() {
  }

}
