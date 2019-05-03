import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PictureComponent } from './picture/picture.component';
import { ActorComponent } from './actor/actor.component';
import { TopMenuComponent } from './top-menu/top-menu.component';

const routes: Routes = [
  { path: "pictures", component: PictureComponent },
  { path: "actors", component: ActorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
