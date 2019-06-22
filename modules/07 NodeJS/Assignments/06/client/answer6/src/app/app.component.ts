import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  onSubmitForm(f){
    const {searchFile} = f.value;
    this.postFile(searchFile);
  }
  async postFile(fileName){
    const url = "http://localhost:4000/file"
    const response = await fetch(url,{
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
        files: [fileName]
      })
    });
    const data = await response.json();
    console.log(data);
  }
}
