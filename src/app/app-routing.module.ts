import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContentComponent } from './components/layout/main-content/main-content.component';
import { AlbumsComponent } from './components/albums/albums.component';
import { FotoComponent } from './components/albums/foto/foto.component';
 
const routes: Routes = [
  {path:"", component: MainContentComponent},
  {path:"gallery/:branca", component: AlbumsComponent},
  {path:"gallery/:branca/:album", component: FotoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
