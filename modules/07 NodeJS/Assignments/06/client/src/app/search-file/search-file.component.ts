import {  Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SearchFileService } from '../services/search-file.service';
import { ResultsService } from '../services/results.service';


@Component({
  selector: 'app-search-file',
  templateUrl: './search-file.component.html',
  styleUrls: ['./search-file.component.css']
})
export class SearchFileComponent implements OnInit {
  @ViewChild('f') searchForm: NgForm;
  @ViewChild('searchInput') searchInput: NgForm;

  foundFiles: string[];

  constructor(
    private _searchFileService: SearchFileService,
    private _resultsService: ResultsService) { 
    this.foundFiles = [];
  }



  async onSubmitSearchForm(filesToSearch) {
    console.log(`filesToSearch: ${filesToSearch}`);

    if (this.searchInput.valid) {
      this._searchFileService.searchValue = this.searchInput.value; // = filesToSearch
      this._searchFileService.isSearchFormValid = true;

      const searchFilesObj = { filesContains : filesToSearch.split(',') };

      await this._searchFileService.postReq(searchFilesObj);

    }
    else {
      this._searchFileService.isSearchFormValid = false;
    }
  }

  ngOnInit() {}

}
