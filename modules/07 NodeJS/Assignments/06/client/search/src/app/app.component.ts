import { Component } from '@angular/core';
import { SearchService } from './search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'search';
  constructor(private searchService: SearchService){
  }

  async onSubmit(e,filesToSearch){
    console.log("s");

    e.preventDefault();
    const searchObject = { files : filesToSearch.split(',') };
    await this.searchService.post(searchObject);
    // console.log(data);
  }
  
}
