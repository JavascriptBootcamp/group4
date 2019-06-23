import { Component } from '@angular/core';
import { SearchService } from 'src/app/Search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
constructor(public searchService:SearchService){}


  title = 'answer76';
  onSubmitSearch(files: string, event: Event) {
    event.preventDefault();

    this.searchService.searchMessages(files);
  }
}
