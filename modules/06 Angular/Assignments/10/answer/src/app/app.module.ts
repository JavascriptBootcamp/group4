import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserTemplateDrivenFormComponent } from './components/user-template-driven-form/user-template-driven-form.component';
import { UserReactiveFormComponent } from './components/user-reactive-form/user-reactive-form.component';


@NgModule({
  declarations: [
    AppComponent,
    UserTemplateDrivenFormComponent,
    UserReactiveFormComponent
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
