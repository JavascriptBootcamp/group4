import { Component, OnInit } from '@angular/core';
import { ResultsService } from '../services/results.service';

@Component({
  selector: 'app-display-results',
  templateUrl: './display-results.component.html',
  styleUrls: ['./display-results.component.css']
})
export class DisplayResultsComponent implements OnInit {

  constructor(private _resultsService: ResultsService) { }

  ngOnInit() {
  }

}
