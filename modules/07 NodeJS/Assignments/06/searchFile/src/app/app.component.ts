import { Component } from '@angular/core';
import { async } from 'q';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'searchFile';



  async sendToServer(input: string) {

    const files = input.split(" ");
    
    await fetch('http://localhost:5000/file', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ file: files })
    })
      .then(response => response.text())
      .then(data => {
        console.log("Status: " + data);
      })
  }

}
