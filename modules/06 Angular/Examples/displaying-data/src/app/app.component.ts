import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  // template: `
  //   <h1>Welcome to {{ title }}</h1>
  // `,
  templateUrl: './app.component.html',
  styles: ['h1{ color: blue }']
})
export class AppComponent implements OnInit {
  bookTitle: string;
  colors: string[] = ["red", "blue", "green"];

  ngOnInit() {
    fetch("https://www.googleapis.com/books/v1/volumes?q=javascript")
    .then( response => response.json() )
    .then( data => {
      console.log('DATA', data);
      this.displayTitle(data.items[3].volumeInfo.title)
    } )
  }

  displayTitle(value){
    this.bookTitle = value;
  }
}
