import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BloodpressurePipe} from './app.BloodpressurePipe ';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    BloodpressurePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
