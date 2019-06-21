import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SearchFileComponent } from './search-file/search-file.component';
import { DisplayResultsComponent } from './display-results/display-results.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchFileComponent,
    DisplayResultsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
