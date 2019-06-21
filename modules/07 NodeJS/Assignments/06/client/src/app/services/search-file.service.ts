import { Injectable } from '@angular/core';
import { ResultsService } from './results.service';

@Injectable({
  providedIn: 'root'
})
export class SearchFileService {
  isSearchFormValid: boolean;
  searchValue: string;

  url: string;

  constructor(private _resultsService: ResultsService) {
    this.isSearchFormValid = false;
    this.url = 'http://localhost:8000/file';
  }


  postReq(filesToSearchObj: object): void{

    fetch(this.url, {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(filesToSearchObj) 
    })
    .then(res => res.json())
    .then(data =>{
      console.log(`stringify data: ${JSON.stringify(data)}`);
      this._resultsService.foundFiles = data.result;
      console.log('this._resultsService.foundFiles:')
      console.log(this._resultsService.foundFiles);
    });
    
  }

}
