import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('inputSearchFile') inputSearchFile: ElementRef;
  filesMatch;

  constructor() {
    this.filesMatch = [];
  }

  searchFile(e: Event) {
    e.preventDefault();
    this.filesMatch = [];
    const url = "http://localhost:8000/file";
    const arr = this.inputSearchFile.nativeElement.value.split(',');
    arr.map((item) => JSON.stringify(item));
    const files = { files: arr };
    fetch(url, {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(files)
    }).then(res => res.json()).then(data => this.filesMatch = [data.files])
  }
}
