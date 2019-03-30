import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { capitalPipe } from './app.capitalPipe';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    capitalPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
