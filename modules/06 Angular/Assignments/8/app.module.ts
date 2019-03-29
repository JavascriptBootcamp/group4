import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { anagramsPipe } from './app.anagramsPipe';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    anagramsPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
