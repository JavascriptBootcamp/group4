import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TimerComponent } from './timer/timer.component';
import { CountDownComponent } from './count-down/count-down.component';


const appRoutes: Routes = [
  { path: '', component: TimerComponent},
  { path: 'count-down', component: CountDownComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    TimerComponent,
    CountDownComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
