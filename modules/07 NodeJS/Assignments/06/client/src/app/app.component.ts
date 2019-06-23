import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "client";
  foundFiles = "";

  getResult(files) {
    const url = "http://localhost:8000/file";
    fetch(url, {
      method: "POST",
      body: files,
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(response => {
        this.foundFiles = response;
        console.log("Success:", JSON.stringify(response));
      })
      .catch(error => console.error("Error:", error));
  }
}