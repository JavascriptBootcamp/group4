import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GalleryComponent } from "./components/gallery/gallery.component";
import { ItubeComponent } from "./components/itube/itube.component";
import { DbayComponent } from "./components/dbay/dbay.component";

const routes: Routes = [
  { path: '', component: GalleryComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'itube', component: ItubeComponent },
  { path: 'dbay', component: DbayComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
