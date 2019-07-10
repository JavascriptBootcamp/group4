import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
    const url = 'http://www.googleapis.com/books/v1/volumes?q=peace';
    this.http.get(url).subscribe(
      data => console.log(data),
      error => console.error("Error:" + JSON.stringify(error)),
      () => console.log("Completed!")
    );
  }

}
