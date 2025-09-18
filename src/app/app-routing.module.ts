import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContentComponent } from './components/layout/main-content/main-content.component';
import { AlbumsComponent } from './components/albums/albums.component';
import { AlbumComponent } from './components/albums/album/album.component';
import { UtilityComponent } from './components/utility/utility.component';
import { VideoComponent } from './components/video/video.component';
import { ReelComponent } from './components/reel/reel.component';
import { CocaComponent } from './components/coca/coca.component';
 
const routes: Routes = [
  {path:"", component: MainContentComponent},
  {path:"video", component: VideoComponent},
  {path:"news", component: ReelComponent},
  {path:"coca", component: CocaComponent},
  {path:"utility/:type", component: UtilityComponent},
  {path:"gallery/:branca", component: AlbumsComponent},
  {path:"gallery/:branca/:album", component: AlbumComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
