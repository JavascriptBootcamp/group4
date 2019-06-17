import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('inputSearchFile') inputSearchFile: ElementRef;
  searchFile() {
    const url = "http://localhost/file"
    fetch(url, {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(this.inputSearchFile)
    })
  }
}
