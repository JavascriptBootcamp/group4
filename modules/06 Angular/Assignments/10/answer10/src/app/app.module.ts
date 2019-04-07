import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NameEditorComponent } from './name-editor/name-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationFormComponent,
    NameEditorComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
