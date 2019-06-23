import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  foundedFiles: string;
  constructor(private searchService: SearchService) {
    this.foundedFiles = "";
  }

  ngOnInit() {
  }
  onSubmitSearch(inputSearch: string, event: Event) {
    event.preventDefault();
    this.searchService.searchFiles(inputSearch)
      .then(data => {
        data ? this.foundedFiles = data : this.foundedFiles = "No Match Found!";
      });
  }
}
