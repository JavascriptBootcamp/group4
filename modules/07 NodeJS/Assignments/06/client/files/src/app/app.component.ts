import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('inputSearchFile') inputSearchFile: ElementRef;
  searchFile(e : Event) {
    e.preventDefault();
    const url = "http://localhost:8000/file"
    fetch(url, {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(this.inputSearchFile.nativeElement.value)
    })
  }
}
