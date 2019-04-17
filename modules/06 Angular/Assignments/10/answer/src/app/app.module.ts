import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserTDFormComponent } from './components/user-template-driven-form/user-template-driven-form.component';
import { UserRFormComponent } from './components/user-reactive-form/user-reactive-form.component';


@NgModule({
  declarations: [
    AppComponent,
    UserTDFormComponent,
    UserRFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
