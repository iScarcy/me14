import { Component, OnInit } from '@angular/core';
import { AppStateModel } from '../../../shared/store/Global/App.state';
import { Store } from '@ngrx/store';
 
import { selectToken } from '../../../shared/store/Login/login.selectors';
import { loadlastalbums } from '../../../shared/store/Albums/albums.actions';
import { ISlide } from '../../../models/ISlide';
import { getalbumslist, getlastalbumslist } from '../../../shared/store/Albums/albums.selectors';
import { map, Observable } from 'rxjs';
import { IAlbumFoto } from '../../../models/IAlbumFoto';
import { baseHomePagePublicImageUrl } from '../../../app.constant';

@Component({
  selector: 'app-main-content',
  standalone: false,
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.css'
})
export class MainContentComponent implements OnInit{
  
  
 
  slideHomePage : ISlide[] = [
    {
      url:baseHomePagePublicImageUrl + "1433258710_chiesa3.jpg",
      title:"La nostra presenza sul territorio"
    },
    {
      url:baseHomePagePublicImageUrl + "1433260541_g20.png",
      title:""
    } ,
    {
      url:baseHomePagePublicImageUrl + "1433260761_oneway.jpg",
      title:""
    }
    

  ]
  slideLastAlbums : ISlide[] = [];

  lastAlbums$ = new Observable<IAlbumFoto[]> ();
  constructor(private _store: Store<AppStateModel>){}

  ngOnInit(): void {
    
      this._store.select(selectToken).subscribe((data) =>{
          
          this.getLastAlbums("varie",data);
    
        }); 
    
  }

  getLastAlbums(branca:string, token:string){

    this._store.dispatch(loadlastalbums({maxAlbum:5, branca: branca, token:token}));

     this.lastAlbums$ = this._store.select(getlastalbumslist);

    
        this.lastAlbums$.subscribe(
          (data) => {
            data?.forEach((foto,index) => {
              let item:ISlide = {
                
                url: foto.imgFolderUrl,
                title: foto.title
              }           
            
              this.slideLastAlbums?.push(item);
              
            }) 
          }
        )
  }

}
