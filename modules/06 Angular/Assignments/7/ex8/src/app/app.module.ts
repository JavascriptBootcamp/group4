import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { IsNormalPipe } from './app.isNormal';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    IsNormalPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
