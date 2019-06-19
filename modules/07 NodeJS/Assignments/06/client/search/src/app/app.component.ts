import { Component } from '@angular/core';
import { SearchService } from './search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'search';
  foundedFiles: string[];
  constructor(private searchService: SearchService){
    this.foundedFiles = [];
  }

  async onSubmit(e,filesToSearch){
    e.preventDefault();
    const searchObject = { files : filesToSearch.split(',') };
    this.foundedFiles = await this.searchService.post(searchObject);
  }
  
}
