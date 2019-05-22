import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnswersComponent } from './answers/answers.component';
import { QuestionsComponent } from './questions/questions.component';
import { QustionComponent } from './qustion/qustion.component';
import { InstructionsComponent } from './instructions/instructions.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AnswersComponent,
    QuestionsComponent,
    QustionComponent,
    InstructionsComponent,
    MenuComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
