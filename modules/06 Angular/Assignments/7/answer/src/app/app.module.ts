import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BloodPressure  } from './shared/pipes/bloodPressure.pipe';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    BloodPressure
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
