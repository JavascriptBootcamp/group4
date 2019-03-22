import { Component ,OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent   {
  title = "My Top 5 Books";
  
  books = [
    {title: "IT",author: "Stephen King",PublicationDate:"September 15, 1986" ,Publisher:"Viking",Pages:1922,comments: "perfect author"},
    {title: "The Dark Tower",author: "Stephen King",PublicationDate:"June 10, 1982" ,Publisher:"Grant",Pages:300,comments: "perfect author"}
]

}
