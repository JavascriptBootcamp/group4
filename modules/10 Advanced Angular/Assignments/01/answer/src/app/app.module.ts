import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReverseStrPipe } from './reverse-str.pipe';
import { CustomDirective } from './custom.directive';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ReverseStrPipe,
    CustomDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
