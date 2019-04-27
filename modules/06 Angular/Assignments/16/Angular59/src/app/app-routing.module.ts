import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { KeywordsComponent } from './keywords/keywords.component'
import {AppComponent} from './app.component';

export const routes: Routes = [
  //{ path: '', pathMatch: 'full' },
  { path: 'keywords', component: KeywordsComponent }
  
];

@NgModule({
  declarations: [],
  imports: [
    //CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
