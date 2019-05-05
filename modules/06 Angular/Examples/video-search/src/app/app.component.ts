import { Component, ViewChild } from '@angular/core';
import { LoggerService } from './logger.service';
import { logTypes } from './logTypes.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('header') myHeader;
  constructor(
    private logger:LoggerService
  ){
    this.logger.setLogType(logTypes.INFO);

    console.log(this.myHeader);
  };


}
