
import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AutherPicsComponent } from './auther-pics/auther-pics.component';


export const routes: Routes = [
  { path: '', component: AppComponent, pathMatch: 'full' },
  { path: 'authors/:name', component: AutherPicsComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
    // CommonModule
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
