import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  existsFiles: string;
  url: string;

  constructor() {
    this.existsFiles = "";
    this.url = 'http://localhost:8888/file';
  }

  onSubmitForm(event: Event, input: HTMLInputElement) {
    event.preventDefault();
    const searchFiles = input.value;
    const arrFiles = searchFiles.split(" ");
    this.searchFiles(arrFiles);
  }

  async searchFiles(files: string[]) {
    const response = await fetch(this.url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        files: files
      })
    });
    const data = await response.json();
    this.existsFiles = data.result; 
  }
}