import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ImageComponent} from './image/image.component';
import {ImagesComponent} from './images/images.component';

const routes: Routes = [
  { path:'', component: ImagesComponent , pathMatch:'full'},
  { path:'image/:id', component: ImageComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
