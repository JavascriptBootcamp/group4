import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainGalleryComponent } from "./components/main-gallery/main-gallery.component";

const routes: Routes = [
  { path: '', component: MainGalleryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
